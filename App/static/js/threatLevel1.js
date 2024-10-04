document.addEventListener('DOMContentLoaded', function () {
    const datab = {
        labels: ['7', '5', '3', '2', '9'],
        datasets: [{
            label: 'Severity',
            data: [334300, 240533, 134072, 109859, 16627],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 205, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)'
            ],
            hoverBorderColor: 'rgba(255, 99, 132, 1)',
        }]
    };
    const dataA = {
        labels: ['drop', 'alert', 'drop-packet', 'block-ip', 'block-url', 'allow', 'random-drop', 'reset-server', 'reset-both', 'sinkhole'],
        datasets: [{
            label: 'Action',
            data: [512861, 169330, 130704, 8819, 6556, 5609, 633, 521, 337, 18],
            backgroundColor: [
                'rgba(255, 132, 153, 0.8)',
                'rgba(255, 179, 94, 0.8)',
                'rgba(255, 215, 126, 0.8)',
                'rgba(85, 212, 212, 0.8)',
                'rgba(255, 255, 255, 0.8)',
                'rgba(173, 122, 255, 0.8)',
                'rgba(221, 223, 227, 0.8)',
                'rgba(173, 122, 255, 0.8)',
                'rgba(255, 179, 94, 0.8)',
                'rgba(255, 112, 123, 0.8)',

            ],

        }],
    }

    const dataM = {
        labels: ['6', '4', '5', '7'],
        datasets: [{
            data: [334300, 243931, 240533, 16627],
            backgroundColor: [
                'rgba(3, 216, 195,0.8)',
                'rgba(167, 51, 255,0.8)',
                'rgba(2, 247, 141,0.8)',
                'rgba(255, 209, 5,0.8)'
            ],
            hoverBorderColor: 'rgba(255, 99, 132, 1)',
        }]

    }

    const config = {
        type: 'polarArea',
        data: datab,
        options: {
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: "white",
                    }
                }
            },
            scales: {
                r: {
                    ticks: {
                        color: "white",
                        font: {
                            size: 14
                        }
                    },
                    grid: {
                        color: "#444",
                    },
                    pointLabels: {
                        color: "white",
                        font: {
                            size: 16
                        }
                    }
                }
            }
        }

    };
    const configA = {
        type: 'bar',
        data: dataA,
        options: {
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: "#fff",
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: "#fff",
                        font: {
                            size: 14
                        }
                    },
                    grid: {
                        color: "#444",
                    }
                },
                y: {
                    ticks: {
                        color: "#fff",
                        font: {
                            size: 14
                        }
                    },
                    grid: {
                        color: "#444",
                    }
                }
            }
        }
    };


    const configM = {
        type: 'polarArea',
        data: dataM,
        options: {
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: "white",
                    }
                }
            },
            scales: {
                r: {
                    ticks: {
                        color: "white",
                        font: {
                            size: 14
                        }
                    },
                    grid: {
                        color: "#444",
                    },
                    pointLabels: {
                        color: "white",
                        font: {
                            size: 16
                        }
                    }
                }
            }
        }
    };



    const ctx = document.getElementById('chartB').getContext('2d');
    const ctxA = document.getElementById('chartA').getContext('2d');
    const ctxM = document.getElementById('chartM').getContext('2d');
    new Chart(ctx, config);
    new Chart(ctxA, configA);
    new Chart(ctxM, configM);
});
