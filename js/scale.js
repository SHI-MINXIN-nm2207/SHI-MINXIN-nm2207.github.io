// make scale effect
function bodyScale1() {

    // 获取屏幕宽度
    // get the width of the screen
    var devicewidth = document.documentElement.clientWidth;
    var pptCanvas = document.getElementById('pptCanvas')
    // make the scale effect
    var scale = devicewidth / 1200;  // 分母——设计稿的尺寸
    // get 90% of the scale
    var targetScale = scale * 0.9;    // 乘以0.9，以达到90%的缩放比例
    // set the scale with center
    pptCanvas.style.zoom = targetScale;
        
}

function bodyScale2() {

    // 获取屏幕宽度
    // get the width of the screen
    var devicewidth = document.documentElement.clientWidth;
    //var snakeCanvas = document.getElementById('main')
    // make the scale effect
    var scale = devicewidth / 1200;  // 分母——设计稿的尺寸
    // get 90% of the scale
    var targetScale = scale * 0.9;    // 乘以0.9，以达到90%的缩放比例
    // set the scale with center
    document.documentElement.style.transform = 'scale(' + targetScale + ')';
    //snakeCanvas.style.zoom = targetScale;
    
        
}


window.onload = window.onresize = function () {
    bodyScale1();
};
