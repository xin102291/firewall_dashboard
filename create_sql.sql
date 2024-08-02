CREATE DATABASE IF NOT EXISTS test;

USE test;

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

INSERT INTO user (email, password, is_first_login, is_admin) VALUES
('admin@example.com','placeholder', FALSE,FALSE);



