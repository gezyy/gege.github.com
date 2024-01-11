document.addEventListener('DOMContentLoaded', function() {
    // 设置延迟时间（例如3秒）
    var delayTime = 3000; // 3000毫秒 = 3秒

    setTimeout(function() {
        // 获取对话文本和链接的元素
        var dialogText = document.getElementById('dialog-text');
        var links = document.getElementById('links');

        // 隐藏文本
        dialogText.style.display = 'none';

        // 显示链接
        links.style.display = 'block';
    }, delayTime);
});
