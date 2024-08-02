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
('d1047274@o365.fcu.edu.tw','scrypt:32768:8:1$2LQrTDpcEQRSO4D7$d819980a6bf666111958a96d4e0c2618436f7920ff68ba1a42e8a13dc1a9daf0e4399242077a45a3a364483810e2543dacf9ede662d4ad08e67feefcd0931181', FALSE,FALSE);



