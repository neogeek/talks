function resizeForRetina (canvas, ratio) {

    ratio = ratio || window.devicePixelRatio;

    canvas.setAttribute('style', 'width: ' + canvas.width + 'px; height: ' + canvas.height + 'px;');

    canvas.setAttribute('width', canvas.width * ratio);
    canvas.setAttribute('height', canvas.height * ratio);

    canvas.getContext('2d').scale(ratio, ratio);

}
