function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}
function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 200,
            header = document.getElementById("header");
            content = document.getElementById("content");
            toggle = document.getElementById("toggle");
        if (distanceY > shrinkOn) {
            header.classList.add("smaller");
            content.classList.add("content-smaller");
            toggle.classList.add("toggle-smaller");
        } if (distanceY < 150) {
            if (hasClass(header,"smaller")) {
            	header.classList.remove("smaller");
            	content.classList.remove("content-smaller");
                toggle.classList.remove("toggle-smaller");
            }
        }
    });
}
window.onload = init();
