import sys
import os

# 设置环境变量
activate_this = '/var/www/firewall_dashboard/venv/bin/activate'
with open(activate_this) as file_:
    exec(file_.read(), dict(__file__=activate_this))

# 添加 Flask 应用路径
sys.path.insert(0, '/var/www/firewall_dashboard')

from main import app as application  
