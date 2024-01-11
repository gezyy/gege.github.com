document.addEventListener('DOMContentLoaded', function() {
    var blackScreen = document.createElement('div');
    blackScreen.classList.add('black-screen');
    document.body.appendChild(blackScreen);

    setTimeout(function() {
        blackScreen.style.width = '0'; // 让黑屏向两边滑开
        blackScreen.style.transition = 'width 1s ease';
    }, 1000); // 1秒后开始动画

    setTimeout(function() {
        blackScreen.remove(); // 动画完成后移除黑屏
    }, 2000); // 2秒后移除黑屏
});

function showImage(imgElement) {
    // 创建一个新的div来放置放大的图片
    var fullscreenDiv = document.createElement('div');
    fullscreenDiv.classList.add('fullscreen-image');
    fullscreenDiv.onclick = function() {
        fullscreenDiv.remove(); // 点击后移除放大的图片
    };

    // 创建一个新的img元素，使用点击的图片的src
    var fullscreenImg = document.createElement('img');
    fullscreenImg.src = imgElement.src;
    fullscreenDiv.appendChild(fullscreenImg);

    // 添加到body
    document.body.appendChild(fullscreenDiv);

    // 显示放大的图片
    fullscreenDiv.style.display = 'flex';
}
