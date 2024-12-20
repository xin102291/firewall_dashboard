from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail
import os

db = SQLAlchemy()
mail = Mail()

def create_app():
    app = Flask(__name__)

    # 配置
    app.config['SECRET_KEY'] = os.urandom(24)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:ischool01@localhost/web'
    app.config['SQLALCHEMY_DATABASE_URI'] = {'second_db':'mysql+pymysql://root:ischool01@localhost/firewall_logs'}
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['MAIL_SERVER'] = 'smtp.gmail.com'
    app.config['MAIL_PORT'] = 587
    app.config['MAIL_USE_TLS'] = True
    app.config['MAIL_USERNAME'] = '102291cindy@gmail.com'
    app.config['MAIL_PASSWORD'] = 'aejv sjvm ksya nphq'

    db.init_app(app)
    mail.init_app(app)



    with app.app_context():
        from . import route
        app.register_blueprint(route.bp)
        db.create_all()

    return app