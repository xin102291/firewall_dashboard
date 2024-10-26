function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    dateTimeElement.textContent = now.toLocaleDateString('zh-TW', options);
}

function formatTimestamp() {
    const updateItems = document.querySelectorAll('.update-item');
    updateItems.forEach(item => {
        const timestamp = item.getAttribute('data-timestamp');
        const date = new Date(timestamp);
        const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        item.querySelector('.timestamp').textContent = date.toLocaleDateString('zh-TW', options);
    });
}

function sortUpdates() {
    const updatesContainer = document.querySelector('.latest-updates');
    const updateItems = Array.from(updatesContainer.querySelectorAll('.update-item'));

    // Sort items by timestamp in descending order
    updateItems.sort((a, b) => new Date(b.getAttribute('data-timestamp')) - new Date(a.getAttribute('data-timestamp')));

    // Remove all current items from the container
    updatesContainer.innerHTML = '';

    // Append sorted items back to the container
    updateItems.forEach(item => updatesContainer.appendChild(item));
}

updateDateTime();
setInterval(updateDateTime, 60000); // Update every minute

formatTimestamp();
sortUpdates();