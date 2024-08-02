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