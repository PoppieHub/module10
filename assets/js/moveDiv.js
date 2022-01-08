let div = document.querySelector('.card');

div.onmousedown = function(e) {

    let coords = getCoords(div);
    let shiftX = e.pageX  - coords.left;
    let shiftY = e.pageY  - coords.top;


    //document.body.appendChild(div);
    moveAt(e);

    function moveAt(e) {
        div.style.left = e.pageX - 50 + 'px';
        div.style.top = e.pageY - 50 + 'px';
    }

    document.onmousemove = function(e) {
        moveAt(e);
    };

    div.onmouseup = function() {
        document.onmousemove = null;
        div.onmouseup = null;
    };

}

function getCoords(elem) {   // кроме IE8-
    let box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}
