from flask_sqlalchemy import SQLAlchemy
from . import db
# db = SQLAlchemy()

class User(db.Model):
    name = db.Column(db.String(5),nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False,primary_key=True)
    password = db.Column(db.String(255), nullable=False)
    is_first_login = db.Column(db.Boolean, default=True)
    otp = db.Column(db.String(6))
    is_admin = db.Column(db.Boolean, default=False)

    def __repr__(self):
        return f'<User {self.email}>'
    
class firewall_logs(db.Model):
    _bind_key_='second_db'
    __tablename__ = 'day_0_action'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    date = db.Column(db.String(255))
    first = db.Column(db.String(255))
    second = db.Column(db.String(255))
    third = db.Column(db.String(255))
    fourth = db.Column(db.String(255))
    fifth = db.Column(db.String(255))
    nfirst = db.Column(db.Integer, default=0)
    nsecond = db.Column(db.Integer, default=0)
    nthird = db.Column(db.Integer, default=0)
    nfourth = db.Column(db.Integer, default=0)
    nfifth = db.Column(db.Integer, default=0)

    def __repr__(self):
        return f'<firewall_logs {self.date}>'