import pymysql
from sys import exc_info

fields = [
    'start_time',
    'log_source',
    'vsys',
    'event_category',
    'high_level_category',
    'low_level_category',
    'threat_category',
    'object_type',
    'event_name',
    'web_category',
    'rule_name',
    'action',
    'source_zone',
    'source_country',
    'source_ip',
    'source_port',
    'post_nat_source_ip',
    'post_nat_source_port',
    'destination_zone',
    'destination_country',
    'destination_ip',
    'destination_port',
    'post_nat_destination_ip',
    'post_nat_destination_port',
    'protocol_id',
    'severity',
    'magnitude',
    'bytes_sent',
    'bytes_received',
    'object_name',
    'url'
]

days = ["day_0_", "day_7_", "day_30_"]

# 修改為你的本地端資料庫連線資訊
cnnt_local = pymysql.Connection(
    host='localhost',
    user='root',
    password='',
    db='web/firewall_logs',  # 如果沒有這個DB請先創建
    charset='utf8mb4',
    cursorclass=pymysql.cursors.DictCursor
)

try:
    with cnnt_local.cursor() as cursor:
        for day in days:
            for field in fields:
                table_name = day + field

                cursor.execute(f"SHOW TABLES LIKE '{table_name}';")
                result = cursor.fetchone()

                if not result:  # Table doesn't exist
                    query_create = f"""
                    CREATE TABLE IF NOT EXISTS `{table_name}` (
                        id INT PRIMARY KEY AUTO_INCREMENT,
                        date VARCHAR(255),
                        first VARCHAR(255),
                        second VARCHAR(255),
                        third VARCHAR(255),
                        fourth VARCHAR(255),
                        fifth VARCHAR(255),
                        nfirst INT DEFAULT 0,
                        nsecond INT DEFAULT 0,
                        nthird INT DEFAULT 0,
                        nfourth INT DEFAULT 0,
                        nfifth INT DEFAULT 0
                    );
                    """
                    print(f"Executing query for table: {table_name}")
                    cursor.execute(query_create)

                    # 插入範例資料
                    query_insert = f"""
                    INSERT INTO `{table_name}` (date, first, second, third, fourth, fifth, nfirst, nsecond, nthird, nfourth, nfifth)
                    VALUES
                    ('2024/9/26', 'drop', 'alert', 'drop-packet', 'block-ip', 'block-url', 205845, 129965, 26934, 5965, 1807),
                    ('2024/9/27', 'spyware', 'vulnerability', 'data', 'flood', 'scan', 553964, 56269, 11703, 3068, 2529),
                    ('2024/9/28', 'malware', 'attack', 'data', 'breach', 'exploit', 450321, 30056, 8907, 1500, 1200),
                    ('2024/9/29', 'ransomware', 'exploit', 'data', 'scan', 'phishing', 679123, 42567, 10921, 2000, 1850),
                    ('2024/9/30', 'Taiwan', 'Hong Kong', '10.0.0.0-10.255.255.255', 'United States', 'Japan', 350231, 4803, 4444, 3697, 2409);
                    """
                    print(f"Inserting sample data into table: {table_name}")
                    cursor.execute(query_insert)

                else:
                    print(f"Table {table_name} already exists. Skipping creation and insert.")

        cnnt_local.commit()  # Commit the transaction for table creation and inserts

except Exception as e:
    print("Error:", exc_info())
finally:
    cnnt_local.close()
    print('Done!')
