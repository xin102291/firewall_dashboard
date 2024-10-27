import sys
import os

# 設置專案目錄
project_home = '/var/www/firewall_dashboard'
if project_home not in sys.path:
    sys.path.insert(0, project_home)

# 設置虛擬環境的 Python 路徑
activate_this = '/var/www/firewall_dashboard/venv/bin/activate_this.py'
exec(open(activate_this).read(), {'__file__': activate_this})

# 將 FLASK_APP 指向你的 Flask 主檔案
os.environ['FLASK_APP'] = 'main.py'

from main import app as application
