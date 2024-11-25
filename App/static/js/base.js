// 1. 優化日期選擇器初始化
document.addEventListener('DOMContentLoaded', () => {
    const daySelect = document.getElementById('day-select');
    const fragment = document.createDocumentFragment(); // 使用文檔片段

    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i + '日';
        fragment.appendChild(option);
    }
    daySelect.appendChild(fragment); // 一次性更新DOM
    
    // 同樣的方式處理月份和年份選擇器
    const monthSelect = document.getElementById('month-select');
    const monthFragment = document.createDocumentFragment();
    for (let i = 1; i <= 12; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i + '月';
        monthFragment.appendChild(option);
    }
    monthSelect.appendChild(monthFragment);
    
    const yearSelect = document.getElementById('year-select');
    const yearFragment = document.createDocumentFragment();
    for (let i = 2022; i <= 2024; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i + '年';
        yearFragment.appendChild(option);
    }
    yearSelect.appendChild(yearFragment);
    
    // 設置初始值
    const today = new Date();
    daySelect.value = today.getDate();
    monthSelect.value = today.getMonth() + 1;
    yearSelect.value = today.getFullYear();
});

// 2. 優化時間更新函數
let lastTimeString = ''; // 用於比較時間是否變化
function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
    };
    const newTimeString = now.toLocaleDateString('zh-TW', options);
    
    // 只在時間真正改變時才更新DOM
    if (lastTimeString !== newTimeString) {
        requestAnimationFrame(() => {
            dateTimeElement.textContent = newTimeString;
            lastTimeString = newTimeString;
        });
    }
}

// 3. 優化排序更新
function sortUpdates() {
    const updatesContainer = document.querySelector('.latest-updates');
    const updateItems = Array.from(updatesContainer.querySelectorAll('.update-item'));
    
    // 先將元素隱藏
    updateItems.forEach(item => {
        item.style.opacity = '0';
    });
    
    // 排序
    updateItems.sort((a, b) => 
        new Date(b.getAttribute('data-timestamp')) - new Date(a.getAttribute('data-timestamp'))
    );
    
    // 使用文檔片段重新插入
    const fragment = document.createDocumentFragment();
    updateItems.forEach(item => fragment.appendChild(item));
    
    // 清空容器並一次性添加所有元素
    requestAnimationFrame(() => {
        updatesContainer.innerHTML = '';
        updatesContainer.appendChild(fragment);
        
        // 淡入效果
        requestAnimationFrame(() => {
            updateItems.forEach(item => {
                item.style.transition = 'opacity 0.3s ease';
                item.style.opacity = '1';
            });
        });
    });
}

// 4. 優化AJAX內容載入
function loadNewContent() {
    const contentElement = document.getElementById('content');
    
    fetch('/new-page')
        .then(response => response.text())
        .then(html => {
            // 創建一個臨時容器
            const temp = document.createElement('div');
            temp.innerHTML = html;
            
            // 淡出當前內容
            contentElement.style.opacity = '0';
            
            // 等待淡出完成後更新內容
            setTimeout(() => {
                contentElement.innerHTML = temp.innerHTML;
                // 淡入新內容
                requestAnimationFrame(() => {
                    contentElement.style.opacity = '1';
                });
            }, 300);
        });
}

// 添加必要的CSS
const style = document.createElement('style');
style.textContent = `
    #date-time,
    .update-item,
    #content {
        transition: opacity 0.3s ease;
    }
    
    .latest-updates {
        will-change: contents;
    }
`;
document.head.appendChild(style);

// 初始化
updateDateTime();
setInterval(updateDateTime, 60000);
formatTimestamp();
sortUpdates();

function updateDangerIndexColor() {
    const dangerIndexValueElement = document.getElementById('dangerIndexValue');
    const dangerIndexBoxElement = document.querySelector('.date .danger-index-box');
    
    // 檢查元素是否存在
    if (!dangerIndexValueElement || !dangerIndexBoxElement) {
        console.error('找不到必要的元素');
        return;
    }

    // 獲取當前的危險指數值
    const dangerIndexValueText = dangerIndexValueElement.textContent;
    const dangerIndexValue = parseInt(dangerIndexValueText.split('/')[0]);
    
    console.log('當前危險指數:', dangerIndexValue);

    // 根據分數設置背景顏色
    if (dangerIndexValue >= 0 && dangerIndexValue <= 29) {
        dangerIndexBoxElement.style.setProperty('background-color', '#2ecc71', 'important'); // 綠色
        console.log('設置綠色');
    } else if (dangerIndexValue >= 30 && dangerIndexValue <= 69) {
        dangerIndexBoxElement.style.setProperty('background-color', '#f1c40f', 'important'); // 黃色
        console.log('設置黃色');
    } else if (dangerIndexValue >= 70 && dangerIndexValue <= 100) {
        dangerIndexBoxElement.style.setProperty('background-color', '#e74c3c', 'important'); // 紅色
        console.log('設置紅色');
    }
}

// 假設你有一個函數來更新危險指數
function updateDangerValue(newValue) {
    const dangerIndexValueElement = document.getElementById('dangerIndexValue');
    if (dangerIndexValueElement) {
        dangerIndexValueElement.textContent = `${newValue}/100`;
        updateDangerIndexColor(); // 更新完數值後立即更新顏色
    }
}

// 當你接收到新的數據時，調用這個函數
// 例如：
// updateDangerValue(75);

// 當DOM加載完成後執行
/*document.addEventListener('DOMContentLoaded', function() {
    updateDangerIndexColor();
    
    // 在Console中提示可用的測試命令
    console.log('你可以使用 testDangerIndex(數值) 來測試不同的危險指數');
    console.log('例如: testDangerIndex(25) 測試綠色');
    console.log('例如: testDangerIndex(50) 測試黃色');
    console.log('例如: testDangerIndex(80) 測試紅色');
});*/
