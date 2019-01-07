var svgLayout = document.getElementById("svgLayout");
var x = 0;
var posX = 0;
var square = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
var startbtn = document.getElementById("start");
var timer = document.getElementById("time");
var time = document.getElementsByClassName("time-show");


class Square {
    constructor(square, x, y, length, width, fill) {
        this.square = square;
        this.x = x;
        this.y = y;
        this.length = length;
        this.width = width;
        this.fill = fill;
    }
    drawSquare() {
        this.square.setAttribute('x', this.x);
        this.square.setAttribute('y', this.y);
        this.square.setAttribute('width', this.width);
        this.square.setAttribute('height', this.length);
        this.square.setAttribute('fill', this.fill);
        this.square.setAttribute('id', "sq");
        svgLayout.appendChild(this.square);
    }
}



startbtn.addEventListener("click", function () {
    
    //create square object
    var sq = new Square(square, 0, 470, 50, 50, "#ee76ad");
    sq.drawSquare();

    startbtn.style.display = "none";
    time[0].style.display = "block";
    timer.style.display = "flex";
    var fiveMinutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
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
            alert("TIME OUT")
            drawSquare(sqaure, 0, 470, 50, 50, "#ee76ad");
            timer = duration;
        }
    }, 1000);
}

window.addEventListener("keydown", function (e) {
    if (e.keyCode === 39 && posX < 450) {
        posX += 10;
        sq = new Square(square, posX, 470, 50, 50, "#ee76ad");
        sq.drawSquare();
        console.log(posX);
    }
    if (e.keyCode === 37 && posX > 0) {
        posX -= 10;
        sq = new Square(square, posX, 470, 50, 50, "#ee76ad");
        sq.drawSquare();
        console.log(posX);
    }
})
