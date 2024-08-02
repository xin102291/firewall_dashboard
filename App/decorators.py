from functools import wraps
from flask import session, redirect, url_for, flash
from .SQL import User

def admin_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'user_id' not in session:
            flash('請先登入', 'error')
            return redirect(url_for('main.login'))
        
        user = User.query.get(session['user_id'])
        if not user or not user.is_admin:
            flash('您沒有權限訪問此頁面', 'error')
            return redirect(url_for('main.index'))
        
        return f(*args, **kwargs)
    return decorated_function