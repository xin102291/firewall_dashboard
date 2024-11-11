document.addEventListener('DOMContentLoaded', function () {
    const dataEn = {
        labels: [
            "Real-Time DNS Detection: DNS Tunneling(109001001)",
            "unknown",
            "RPC Portmapper DUMP Request Detected",
            "Proxy(109010004)",
            "Parked(109010003)",
            "Domain generation algorithms(109000001)",
            "Grayware(109010002)",
            "Phishing(109010001)",
            "Microsoft Windows NTLMSSP Detection",
            "Flood Detected"
        ],
        datasets: [{
            data: [289547, 148305, 91049, 62245, 61971, 26659, 25552, 24592, 18878, 11931],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(132, 159, 64, 0.2)',
                'rgba(255, 46, 64, 0.2)',
                'rgba(230, 159, 64, 0.2)',
                'rgba(255, 159, 47, 0.2)',
                'rgba(255, 205, 86, 0.2)'
            ]
        }]
    };

    const dataEc = {
        labels: ["PA Series Threat", "PA Series Threat - Vulnerability Exploit", "PA Series Threat - Spyware"],
        datasets: [{
            data: [701806, 105223, 28362],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)']
        }]
    };

    const dataOn = {
        labels: [
            "vipshop.test58i.baishancdnx.com", "N/A", "keepalive.softether.org",
            "tanetstatistic.fcuicsrc.com", "mscompany.dynu.com", "community-pools.mysrv.cloud",
            "pull-hls-spe-l26.douyinliving.com.cdnhwczba04.com", "pull-flv-spe-l26.douyinliving.com.cdnhwczba04.com",
            "pull-lls-spe-l26.douyinliving.com.cdnhwczba04.com", "tanetmonitor.fcuicsrc.com"
        ],
        datasets: [{
            data: [280709, 137673, 37758, 20163, 15590, 15327, 10099, 10032, 9562, 9150],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ]
        }]
    };

    const dataU = {
        labels: [
            "N/A", "supapush.net", "patensmuled.top", "www.fatfoxtab.com", "videodownloderplus.com",
            "trololopush2023push.com", "icloud.manuals.dev", "work.a-poster.info:25000", "lecapush.net", "cohawaut.com"
        ],
        datasets: [{
            data: [828835, 2609, 2609, 726, 496, 384, 360, 288, 261, 174],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ]
        }]
    };

    const ctxEn = document.getElementById('chartEn').getContext('2d');
    const ctxEc = document.getElementById('chartEc').getContext('2d');
    const ctxOn = document.getElementById('chartOn').getContext('2d');
    const ctxU = document.getElementById('chartU').getContext('2d');

    const myChartEn = new Chart(ctxEn, {
        type: 'bar',
        data: dataEn,
        options: {
            responsive: true,
            indexAxis: 'y',
        }
    });

    const myChartEc = new Chart(ctxEc, {
        type: 'pie',
        data: dataEc,
        options: {
            responsive: true,

        }
    });

    const myChartOn = new Chart(ctxOn, {
        type: 'bar',
        data: dataOn,
        options: {
            responsive: true,
            indexAxis: 'y',
        }
    });

    const myChartU = new Chart(ctxU, {
        type: 'bar',
        data: dataU,
        options: {
            responsive: true,
            indexAxis: 'y',
        }
    });
});
