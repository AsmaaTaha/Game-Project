var svgLayout = document.getElementById("svgLayout");
var x = 0;
var posX = 0;
var sqaure = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
window.onload = function () {
    var fiveMinutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            alert("TIME OUT")
            drawSquare(sqaure, 0, 470, 50, 50, "#ee76ad");
            timer = duration;
        }
    }, 1000);
}
function drawSquare(sqaure, x, y, width, height, fill) {
    sqaure.setAttribute('x', x);
    sqaure.setAttribute('y', y);
    sqaure.setAttribute('width', width);
    sqaure.setAttribute('height', height);
    sqaure.setAttribute('fill', fill);
    // rect.setAttribute('stroke', "black");
    sqaure.setAttribute('id', "sq");
    svgLayout.appendChild(sqaure);
}

drawSquare(sqaure, 0, 470, 50, 50, "#ee76ad");

window.addEventListener("keydown", function (e) {
    if (e.keyCode === 39 && posX < 450) {
        posX += 10;
        drawSquare(sqaure, posX, 470, 50, 50, "#ee76ad");
        console.log(posX);
    }
    if (e.keyCode === 37 && posX > 0) {
        posX -= 10;
        drawSquare(sqaure, posX, 470, 50, 50, "#ee76ad");
        console.log(posX);
    }
})
