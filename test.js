document.getElementById('slider-left').onclick = sliderLeft;
var left = 302.2;

function sliderLeft() {
    left -= 302.2;
    if (left < -1208.8){
        left = 0;
    }
    var horizontal = document.getElementById('horizontal');
    horizontal.style.left = left+'px';
}

document.getElementById('slider-right').onclick = sliderRight;
var right = -1511;

function sliderRight() {
    right += + 302.2;
    if (right > 302.2){
        right = -1208.8;
    }
    var horizontal = document.getElementById('horizontal');
    horizontal.style.left = right+'px';
}
