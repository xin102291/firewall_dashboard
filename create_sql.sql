CREATE DATABASE IF NOT EXISTS web;

USE web;

CREATE TABLE IF NOT EXISTS user (
    name VARCHAR(5) NOT NULL,
    email VARCHAR(120) NOT NULL UNIQUE PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    is_first_login BOOLEAN DEFAULT TRUE,
    otp VARCHAR(6),
    is_admin BOOLEAN DEFAULT FALSE
);

-- 為了提高查詢效率，我們可以在 email 列上添加索引
CREATE INDEX idx_user_email ON user(email);

-- 範例管理員帳號：首次登入時會寄 OTP 到此信箱並要求設定新密碼
-- password 欄位可先填任意字串，首次登入設定新密碼後會被覆寫
INSERT INTO user (name, email, password, is_first_login, is_admin) VALUES
('Admin', 'admin@example.com', 'placeholder', TRUE, TRUE);
