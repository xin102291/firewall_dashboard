// Action 
document.addEventListener('DOMContentLoaded', function () {
    // 資料設定
    const data = {
        labels: [
            '丟棄封包',         // drop
            '發出警報',         // alert
            '丟棄封包',         // drop-packet
            '封鎖IP',           // block-ip
            '封鎖URL',          // block-url
            '允許',             // allow
            '一般丟棄',         // random-drop
            '伺服器重置',       // reset-server
            '重置雙方',         // reset-both
            '沉洞伺服器'        // sinkhole
        ],
        datasets: [{
            label: '行動計數',
            data: [861, 330, 704, 819, 556, 609, 633, 521, 337, 18],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 205, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)',
                'rgba(201, 203, 207, 0.8)',
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 205, 86, 0.8)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(201, 203, 207, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 205, 86, 1)'
            ],
            borderWidth: 1
        }]
    };

    // 極地圖配置
    const config = {
        type: 'polarArea',
        data: data,
        options: {
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: "#fff"
                    }
                }
            },
            scales: {
                r: {
                    ticks: {
                        color: "#000",
                        font: {
                            size: 14,
                        }
                    },
                    grid: {
                        color: "#888"
                    },
                    pointLabels: {
                        color: "#000",
                        font: {
                            size: 14
                        }
                    }
                }
            }
        }
    };

    // 渲染極地圖表
    const ctx = document.getElementById('myPolarChart1').getContext('2d');
    new Chart(ctx, config);

    // 第二個圖表資料設定
    const secondData = {
        labels: [
            '任何',               // any
            '教育機構',           // educational-institutions
            '惡意軟體',           // malware
            '電腦和網路資訊',     // computer-and-internet-info
            '中等風險',           // medium-risk
            '釣魚軟體',           // phishing
            '商業和經濟',         // business-and-economy
            '私人IP位置',         // private-ip-addresses
            '搜尋引擎',           // search-engines
            '社群'               // society
        ],
        datasets: [{
            label: '行動計數',
            data: [145, 87, 91, 77, 73, 41, 2, 85, 55, 45],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 205, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)',
                'rgba(201, 203, 207, 0.8)',
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 205, 86, 0.8)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(201, 203, 207, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 205, 86, 1)'
            ],
            borderWidth: 1
        }]
    };

    // 第二個極地圖配置
    const secondConfig = {
        type: 'polarArea',
        data: secondData,
        options: {
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: "#fff"
                    }
                }
            },
            scales: {
                r: {
                    ticks: {
                        color: "#000",
                        font: {
                            size: 14
                        }
                    },
                    grid: {
                        color: "#888"
                    },
                    pointLabels: {
                        color: "#000",
                        font: {
                            size: 14
                        }
                    }
                }
            }
        }
    };

    // 渲染第二個圖表
    const ctx2 = document.getElementById('myPolarChart2').getContext('2d');
    new Chart(ctx2, secondConfig);

    // 水平長條圖數據設定
    const horizontalBar1Data = {
        labels: ['7', '5', '3', '2', '9'],
        datasets: [{
            label: '數量',
            data: [334300, 240533, 134072, 109859, 16627],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235,1)',
                'rgba(255, 205, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    };

    // 水平長條圖配置
    const horizontalBar1Config = {
        type: 'bar',
        data: horizontalBar1Data,
        options: {
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        color: "#fff" // x 軸刻度顏色
                    }
                },
                y: {
                    ticks: {
                        color: "#fff" // y 軸刻度顏色
                    }
                }
            },
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: "#fff" // 水平長條圖的 label 顏色
                    }
                },
                title: {
                    display: true,
                    color: "#fff" // 標題顏色
                }
            }
        }
    };

    // 渲染水平長條圖
    const ctx3 = document.getElementById('myHorizontalBar1Chart').getContext('2d');
    new Chart(ctx3, horizontalBar1Config);

    const horizontalBar2Data = {
        labels: [
            '校外的TANET區域',
            '校內的IDC（機房）區域',
            '校外的IDC區域',
            '校內的TANET區域',
            '資訊處'
        ],
        datasets: [{
            label: '資料數量',
            data: [404800, 193584, 189742, 41759, 5506],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    };

    // 水平長條圖配置
    const horizontalBar2Config = {
        type: 'bar',
        data: horizontalBar2Data,
        options: {
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        color: "#fff" // x 軸刻度顏色
                    }
                },
                y: {
                    ticks: {
                        color: "#fff" // y 軸刻度顏色
                    }
                }
            },
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: "#fff" // 水平長條圖的 label 顏色
                    }
                },
                title: {
                    display: true,
                    text: '來源地與資料數量',
                    color: "#fff" // 標題顏色
                }
            }
        }
    };

    // 渲染水平長條圖
    const ctx4 = document.getElementById('myHorizontalBar2Chart').getContext('2d');
    new Chart(ctx4, horizontalBar2Config);
    
});

