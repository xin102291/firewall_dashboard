document.addEventListener("DOMContentLoaded", function() {
    const buildingData = {
        building1: {
            name: "教學大樓",
            capacity: "容納500人"
        },
        building2: {
            name: "圖書館",
            capacity: "容納300人"
        },
        // 可以根據需要添加更多建築物
    };

    for (const [id, data] of Object.entries(buildingData)) {
        const buildingElement = document.getElementById(id);
        if (buildingElement) {
            buildingElement.innerHTML = `
                <strong>${data.name}</strong><br>
                容量: ${data.capacity}
            `;
        }
    }
});