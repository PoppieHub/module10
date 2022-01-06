let div = document.querySelector('.card');

div.onmousedown = function(e) {

    let coords = getCoords(div);
    let shiftX = e.pageX  - coords.left;
    let shiftY = e.pageY + 192 - coords.top;

    div.style.position = 'absolute';
    document.body.appendChild(div);
    moveAt(e);

    //div.style.zIndex = 1000; // над другими элементами

    function moveAt(e) {
        div.style.left = e.pageX - shiftX + 'px';
        div.style.top = e.pageY - shiftY + 'px';
    }

    document.onmousemove = function(e) {
        moveAt(e);
    };

    div.onmouseup = function() {
        document.onmousemove = null;
        div.onmouseup = null;
    };

}

div.ondragstart = function() {
    return false;
};

function getCoords(elem) {   // кроме IE8-
    let box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}