var startbtn = document.getElementById("start");
var timer = document.getElementById("time");
var time = document.getElementsByClassName("time-show");

startbtn.addEventListener("click", function () {
    startbtn.style.display = "none";
    time[0].style.display = "block";
    timer.style.display = "flex";
    var minutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(minutes, display);
    clicked = true;
});
function startTimer(duration, display) {

    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            // alert("TIME OUT")
            drawSquare(sqaure, 0, 470, 50, 50, "#ee76ad");
            timer = duration;
        }
    }, 1000);
}

class Shape {
    constructor(width, height, color, x, y, type) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        this.type = type;
        this.score = 0;
        this.speedX = 0;
        this.speedY = 0;
        this.gravity = 0;
        this.gravitySpeed = 0;
    }
    drawCanvas() {
        var canvas = document.createElement("canvas");
        canvas.width = window.innerWidth - 30;
        canvas.height = 600;
        this.context = canvas.getContext("2d");
        canvas.setAttribute('class', "window");
        document.body.insertBefore(canvas, document.body.childNodes[0]);
        // this.frameNo = 0;
        // this.interval = setInterval(updateGameArea, 20);
    }
    drawShape() {

    }
}

var s = new Shape(100, 100, "red", 560, 500, "square");
s.drawCanvas();