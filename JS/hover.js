var el = document.getElementById("hover-resize");
var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
var fs = parseFloat(style);
var ofs = fs;

function hoverResize(){
document.getElementById("hover-resize").style.fontSize = (fs * 2) + 'px';
}
function hoverRelease(){
document.getElementById("hover-resize").style.fontSize = ofs + 'px';
}
