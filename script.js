// script.js

document.addEventListener('click', function (event) {
    const clickAnimation = document.createElement('div');
    clickAnimation.className = 'click-animation';
    document.body.appendChild(clickAnimation);

    const x = event.clientX;
    const y = event.clientY;

    clickAnimation.style.left = x + 'px';
    clickAnimation.style.top = y + 'px';

    setTimeout(function () {
        clickAnimation.remove();
    }, 300);
});
if (/iPhone|iPad|iPod|Android|Windows Phone/i.test(navigator.userAgent)) {
            alert('这是移动端设备！');
            // 在这里可以添加移动端设备的特定处理逻辑
        }