// 初始化分頁邏輯
function initPagination() {
    const pageLinks = document.querySelectorAll('.page-link');
    pageLinks.forEach(function(pageLink) {
        pageLink.addEventListener('click', function(event) {
            event.preventDefault();  // 防止默認的頁面跳轉行為
            
            const pageNum = getPageNumFromLink(event.target);  // 獲取頁碼
            console.log('Clicked page:', pageNum);
            
            // 發送請求獲取新頁面的數據，這裡可以根據需要替換為 Fetch 或 Ajax 請求
            fetch(`/detailedData?page=${pageNum}`)
                .then(response => response.text())
                .then(html => {
                    // 更新表格內容
                    document.querySelector('.table-wrapper').innerHTML = html;
                })
                .catch(error => console.error('Error loading data:', error));
        });
    });
}

// 從分頁按鈕獲取頁碼
function getPageNumFromLink(link) {
    // 提取 URL 中的 page 參數
    const href = link.getAttribute('href');
    const pageNum = href.split('=')[1];
    return pageNum;
}

// 如果有需要的話，這裡可以加上其他功能，例如自動加載資料或處理其他事件
