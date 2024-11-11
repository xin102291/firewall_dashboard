// 通用圖表配置函數
function createChart(elementId, chartType, labels, data, backgroundColors, label) {
    const ctx = document.getElementById(elementId);
    new Chart(ctx, {
        type: chartType,
        data: {
            labels: labels,
            datasets: [{
                label: label,
                data: data,
                backgroundColor: backgroundColors,
                borderColor: 'rgba(211, 211, 211, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: 'white',
                        font: {
                            size: 14
                        },
                        padding: 3,
                        boxWidth: 15,
                        boxHeight: 15,
                    }
                },
                datalabels: {
                    color: 'white',
                    font: {
                        size: 12
                    },
                    align: function(context) {
                        return context.chart.config.type === 'bar' ? 'end' : 'center';
                    },
                    anchor: function(context) {
                        return context.chart.config.type === 'bar' ? 'end' : 'center';
                    },
                    formatter: function(value, context) {
                        if (context.chart.config.type === 'bar') {
                            return value;
                        } else if (context.chart.config.type === 'pie') {
                            return ''; // 圓餅圖不顯示數據標籤
                        }
                    }
                }
            },
            scales: {
                x: {
                    display: elementId === 'barChart', // 只顯示長條圖的 X 軸
                    ticks: {
                        color: 'white'
                    }
                },
                y: {
                    display: elementId === 'barChart', // 只顯示長條圖的 Y 軸
                    ticks: {
                        color: 'white'
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });
}


// 圓餅圖 1
createChart(
    'pieChart',
    'pie',
    ['dns-c2 惡意中繼站', 'dns-malware dns惡意軟體', 'info-leak 資訊外洩', 'dns-proxy dns代管', 'dns-parked dns暫停', 'dns-grayware  dns資安威脅程式', 'dns-phishing dns釣魚', 'flood 洪水', 'dns-ddns 動態域名系統', 'N/A 無'],
    [333332, 137409, 118186, 62245, 61971, 47016, 24592, 11931, 7400, 6583],
    ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(99, 255, 132, 1)', 'rgba(235, 54, 162, 1)', 'rgba(86, 255, 206, 1)', 'rgba(192, 75, 192, 1)'],
    '攻擊類型分佈'
);

// 長條圖
createChart(
    'barChart',
    'bar',
    ['1','2','3','4','5','6','7','8','9'],
    [0,109859, 134072,0,240533,0,334300,0,16627],
    ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
    '威脅級別'
);

// 圓餅圖 2 - 高級別類別
createChart(
    'highLevelPieChart',
    'pie',
    ['Exploit 漏洞', 'Suspicious Activity 可疑活動', 'Unknown 未知', 'Potential Exploit 潛在漏洞', 'Application 應用程式', 'Malware 惡意軟體', 'DOS', 'Access 存取', 'Recon 偵查', 'Authentication 認證'],
    [304293, 186008, 148305, 67656, 62245, 38932, 13095, 6556, 4725, 3576],
    ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(99, 255, 132, 1)', 'rgba(235, 54, 162, 1)', 'rgba(86, 255, 206, 1)', 'rgba(192, 75, 192, 1)'],
    '高級別類別分佈'
);

// 圓餅圖 3 - 低級別類別
createChart(
    'lowLevelPieChart',
    'pie',
    ['DNS Exploit 域名系統漏洞', 'Unknown 未知', 'Information Leak 資料洩漏', 'Potential DNS Vulnerability 潛在DNS漏洞', 'Web Proxy 網路代理', 'Potential DNS Exploit 潛在DNS漏洞', 'Potential Botnet Connection 潛在殭屍網路連接', 'Phishing Host 網路釣魚主機', 'Flood 洪水', 'Misc Malware 雜項惡意軟體'],
    [299710, 148305, 118162, 66336, 62245, 36738, 30918, 24592, 11931, 7400],
    ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(99, 255, 132, 1)', 'rgba(235, 54, 162, 1)', 'rgba(86, 255, 206, 1)', 'rgba(192, 75, 192, 1)'],
    '低級別類別分佈'
);

