from flask import Blueprint, jsonify, request, render_template,session,redirect, url_for
from werkzeug.security import generate_password_hash, check_password_hash
from . import db, mail
from .SQL import User
from flask_mail import Message
import random
import string
from .decorators import *


bp = Blueprint('main', __name__)

@bp.before_request
def require_login():
    allowed_routes = [
        'main.index', 'main.login', 'main.verify_otp', 
        'main.check_first_login', 'main.verify_otp_page'
    ]
    if request.endpoint not in allowed_routes and 'user_email' not in session:
        return redirect(url_for('main.index'))

from functools import wraps
from flask import session, redirect, url_for

def admin_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not session.get('is_admin'):
            return redirect(url_for('main.index'))
        return f(*args, **kwargs)
    return decorated_function

def generate_otp():
    return ''.join(random.choices(string.digits, k=6))

def send_otp_email(email, otp):
    msg = Message('FCU 防火牆儀表板 - 一次性密碼',
                  sender='your_email@gmail.com',
                  recipients=[email])
    msg.body = f'您的一次性密碼是: {otp}'
    mail.send(msg)

@bp.route('/')
def index():
    return render_template('login.html')

@bp.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    
    user = User.query.filter_by(email=email).first()
    
    if not user:
        return jsonify({'message': '用戶不存在'}), 404
    
    if user.is_first_login:
        return jsonify({'message': '首次登入，請使用首次登入按鈕'}), 200
    
    if check_password_hash(user.password, password):
        session['user_email'] = user.email
        session['is_admin'] = user.is_admin
        if user.is_admin:
            return jsonify({'message': '登入成功', 'redirect': '/admin', 'is_admin': True}), 200
        else:
            return jsonify({'message': '登入成功', 'redirect': '/home', 'is_admin': False}), 200
    else:
        return jsonify({'message': '密碼錯誤'}), 401

@bp.route('/check-first-login', methods=['POST'])
def check_first_login():
    data = request.json
    email = data.get('email')
    print("first: ",email)
    
    user = User.query.filter_by(email=email).first()
    
    if not user:
        return jsonify({'message': '用戶不存在'}), 404
    
    
    if user.is_first_login:
        otp = generate_otp()
        user.otp = otp
        db.session.commit()
        send_otp_email(email, otp)
        return jsonify({'is_first_login': True, 'message': 'OTP已發送到郵箱'}), 200
    else:
        return jsonify({'is_first_login': False, 'message': '這不是首次登入'}), 200
    
@bp.route('/logout', methods=['GET', 'POST'])
def logout():
    session.clear()
    return redirect(url_for('main.index'))

@bp.route('/verify-otp', methods=['POST'])
def verify_otp():
    data = request.json
    email = data.get('email')
    otp = data.get('otp')
    new_password = data.get('new_password')
    
    user = User.query.filter_by(email=email).first()
    
    if not user:
        return jsonify({'message': '用戶不存在'}), 404
    
    if user.otp != otp:
        return jsonify({'message': 'OTP錯誤'}), 401
    
    user.password = generate_password_hash(new_password)
    user.is_first_login = False
    user.otp = None
    db.session.commit()
    
    return jsonify({'message': '密碼設置成功，請使用新密碼登入'}), 200

@bp.route('/verify-otp')
def verify_otp_page():
    return render_template('verify_otp.html')

@bp.route('/admin/create-user', methods=['POST'])
@admin_required
def create_user():
    data = request.json
    email = data.get('email')
    name = data.get("username")
    initial_password = ''.join(random.choice(string.ascii_letters + string.digits + string.punctuation) for _ in range(8))
    
    if User.query.filter_by(email=email).first():
        return jsonify({'message': '用戶已存在'}), 400
    
    new_user = User(name=name, email=email, password=generate_password_hash(initial_password))
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({'message': '用戶創建成功'}), 201

@bp.route('/admin')
@admin_required
def admin_interface():
    if not session.get('is_admin'):
        return redirect(url_for('main.index'))
    return render_template('admin.html')

@bp.route('/check-admin')
def check_admin():
    is_admin = session.get('is_admin', False)
    return jsonify({'is_admin': is_admin})

@bp.route('/home')
def home():    
    user_email = session['user_email'] # 獲取使用者的電子郵件 
    #print(f"User email from session: {user_email}")  
    
    user = User.query.filter_by(email=user_email).first() #查詢使用者資料
    
    
    #print(f"User name from database: {user.name}")  
    
    return render_template('home.html', name=user.name) #將使用者名字傳給home.html使用

@bp.route('/threatLevel')
def threatLevel():    
    user_email = session['user_email'] # 獲取使用者的電子郵件 
    #print(f"User email from session: {user_email}")  
    
    user = User.query.filter_by(email=user_email).first() #查詢使用者資料
    
    
    #print(f"User name from database: {user.name}")  
    
    return render_template('threatLevel.html', name=user.name) #將使用者名字傳給home.html使用

@bp.route('/web')
def web():    
    user_email = session['user_email'] # 獲取使用者的電子郵件 
    #print(f"User email from session: {user_email}")  
    
    user = User.query.filter_by(email=user_email).first() #查詢使用者資料
    
    
    #print(f"User name from database: {user.name}")  
    
    return render_template('web.html', name=user.name) #將使用者名字傳給home.html使用




