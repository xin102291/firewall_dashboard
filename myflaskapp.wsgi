import sys
import os

# 虚拟环境激活
activate_this = '/var/www/firewall_dashboard/venv/bin/activate_this.py'
with open(activate_this, encoding='utf-8') as file_:
    exec(file_.read(), {'__file__': activate_this})

# 将项目路径添加到 sys.path
sys.path.insert(0, '/var/www/firewall_dashboard')

# 从 main.py 导入应用实例
from main import app as application
