// 簡單的點擊效果示範
document.addEventListener('DOMContentLoaded', () => {
    const choiceButtons = document.querySelectorAll('.choice-btn');
    choiceButtons.forEach(button => {
        button.addEventListener('click', () => {
            const storyText = document.querySelector('.story-text');
            storyText.innerHTML += `<p>你選擇了: ${button.textContent}</p>`;
            storyText.scrollTop = storyText.scrollHeight;
        });
    });
    
    // 背包按鈕效果
    const inventoryBtn = document.querySelector('.inventory-btn');
    inventoryBtn.addEventListener('click', () => {
        alert('背包系統尚未實現！');
    });
});