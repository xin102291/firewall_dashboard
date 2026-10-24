# firewall_dashboard

A Flask + MySQL web dashboard for visualizing campus firewall logs, with email OTP first-login and admin-managed accounts.

校園防火牆日誌儀表板。使用者以 Email 登入，首次登入需透過信箱收到的一次性密碼（OTP）設定密碼；管理員可在後台建立帳號。登入後可瀏覽攻擊類型分佈、網頁分析、地圖與詳細日誌四個頁面。

## 功能

- **登入與 OTP 驗證**：帳號由管理員建立，首次登入時系統寄送 6 位數 OTP 到使用者信箱，驗證後自行設定密碼；之後以 Email＋密碼登入。
- **管理員後台**：`/admin` 頁面可新增使用者，密碼以 Werkzeug 雜湊儲存。
- **攻擊類型**（`/threatLevel`）：以 Chart.js 呈現威脅級別、高／低級別類別分佈。
- **網頁分析**（`/threatLevel1`）：網站類別與攻擊次數的長條圖。
- **地圖**（`/map`）：校園平面圖，標示各建築物的狀態數值。
- **詳細數據**（`/detailedData`）：從 MySQL 讀取防火牆日誌，每頁 20 筆分頁顯示。

> 目前圖表頁的數值為前端靜態範例資料；只有「詳細數據」頁會實際查詢資料庫。

## 技術棧

| 類別 | 使用技術 |
|---|---|
| 後端 | Python、Flask、Flask-SQLAlchemy、Flask-Mail |
| 資料庫 | MySQL（PyMySQL 驅動） |
| 前端 | HTML／CSS／JavaScript、Bootstrap 5、Chart.js |
| 部署 | `myflaskapp.wsgi`（Apache mod_wsgi） |

## 安裝與執行

1. 建立虛擬環境並安裝套件
   ```bash
   python -m venv venv
   venv\Scripts\activate        # Windows；macOS/Linux 用 source venv/bin/activate
   pip install -r requirements.txt
   ```
2. 建立資料庫
   - 啟動 MySQL（開發時使用 XAMPP）。
   - 匯入 `create_sql.sql`：建立 `web` 資料庫、`user` 資料表與一筆範例管理員帳號（`admin@example.com`），請把信箱改成自己的。
   - 執行 `python db_table.py` 建立防火牆日誌資料表並塞入範例資料（請先依檔內註解修改連線資訊）。
3. 設定環境變數
   ```bash
   copy .env.example .env       # macOS/Linux 用 cp
   ```
   在 `.env` 填入 MySQL 連線字串與寄信用的信箱帳密（Gmail 需使用「應用程式密碼」）。
4. 啟動
   ```bash
   python main.py
   ```
   開啟 `http://localhost:8800`，用範例管理員帳號走一次「首次登入 → 收 OTP → 設定密碼」流程。

## 專案結構

```
firewall_dashboard/
├── main.py              # 進入點，啟動 Flask（port 8800）
├── myflaskapp.wsgi      # Apache mod_wsgi 部署用
├── create_sql.sql       # 建立 web 資料庫與 user 資料表
├── db_table.py          # 建立防火牆日誌資料表並寫入範例資料
├── firewall_logs.csv    # 日誌範例資料
├── requirements.txt
├── .env.example         # 環境變數範本
└── App/
    ├── __init__.py      # create_app：讀取設定、初始化 DB 與 Mail
    ├── route.py         # 所有路由：登入、OTP、管理員、各儀表板頁
    ├── SQL.py           # SQLAlchemy 模型：User、firewall_logs
    ├── decorators.py    # admin_required 裝飾器
    ├── templates/       # Jinja2 樣板（login、verify_otp、admin、home、threatLevel、map、detailedData…）
    └── static/          # css、js、images、fonts
```

## 團隊分工

| 成員 | 負責內容 |
|---|---|
| xin102291 | 〔請補：例如 登入／OTP 流程、資料庫設計、部署〕 |
| Crystal0911 | 〔請補〕 |
| FAN | 〔請補〕 |
