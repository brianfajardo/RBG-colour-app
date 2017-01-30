var app = {
    colors: [],
    answer: "",
    mode: "easy",
    init: function () {
        this.generateSquares();
        this.generateAnswer();
        this.chooseSquare();
        handlers.resetGame();
        handlers.easyMode();
        handlers.hardMode();
        document.querySelector('ul').style.pointerEvents = "auto";
    },
    generateColor: function () {
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);
        var rgb = "rgb(" + red + ", " + green + ", " + blue + ")";
        this.colors.push(rgb)
        return rgb;
    },
    generateSquares: function () {
        var squaresUl = document.querySelector('ul');
        squaresUl.innerHTML = "";
        this.colors = [];
        if (this.mode === "easy") {
            for (var i = 0; i < 3; i++) {
                var squareLi = document.createElement('li');
                this.styleSquares(squareLi);
                squaresUl.appendChild(squareLi);
            }
        } else if ((this.mode === "hard")) {
            for (var i = 0; i < 6; i++) {
                var squareLi = document.createElement('li');
                this.styleSquares(squareLi);
                squaresUl.appendChild(squareLi);
            }
        }
    },
    styleSquares: function (listItem) {
        listItem.style.height = "140px";
        listItem.style.width = "140px";
        listItem.style.backgroundColor = this.generateColor();
        listItem.style.listStyle = "none";
    },
    generateAnswer: function () {
        if (this.mode === "easy") {
            var theAnswer = this.colors[Math.floor(Math.random() * 3)];
        } else if (this.mode === "hard") {
            var theAnswer = this.colors[Math.floor(Math.random() * 7)];
        };
        onscreenRGB = document.getElementById('onscreenRGB');
        onscreenRGB.textContent = theAnswer;
        this.answer = theAnswer;
    },
    chooseSquare: function () {
        var newGame = document.getElementById('newGame');
        var statusText = document.getElementById('statusText');
        var squareUl = document.querySelector('ul');
        var backgroundColor = document.getElementById('correctBackgroundColor');
        squareUl.addEventListener('click', function (e) {
            if (e.target.style.backgroundColor == app.answer) {
                statusText.textContent = "Winner!";
                newGame.textContent = "Play again?";
                backgroundColor.style.backgroundColor = e.target.style.backgroundColor;
                squareUl.style.pointerEvents = "none";
            } else {
                statusText.textContent = "Try again!";
                e.target.style.visibility = "hidden";
            }
        })
    },
    easyMode: function () {
        this.mode = "easy"
    },
    hardMode: function () {
        this.mode = "hard"
    },
}

var handlers = {
    resetGame: function () {
        var newGame = document.getElementById('newGame');
        var backgroundColor = document.getElementById('correctBackgroundColor');
        newGame.addEventListener('click', function () {
            app.init();
            var statusText = document.getElementById('statusText')
            statusText.textContent = "";
            newGame.textContent = "";
            backgroundColor.style.backgroundColor = "#F5F5F5"
        })
    },
    easyMode: function () {
        var statusText = document.getElementById('statusText')
        var easyBtn = document.getElementById('easyBtn');
        var newGame = document.getElementById('newGame');
        var backgroundColor = document.getElementById('correctBackgroundColor');
        easyBtn.addEventListener('click', function () {
            app.easyMode();
            newGame.textContent = "";
            statusText.textContent = "";
            backgroundColor.style.backgroundColor = "#F5F5F5";
            app.init();
        })
    },
    hardMode: function () {
        var statusText = document.getElementById('statusText')
        var hardBtn = document.getElementById('hardBtn');
        var newGame = document.getElementById('newGame');
        var backgroundColor = document.getElementById('correctBackgroundColor');
        hardBtn.addEventListener('click', function () {
            app.hardMode();
            newGame.textContent = "";
            statusText.textContent = "";
            backgroundColor.style.backgroundColor = "#F5F5F5";
            app.init();
        })
    }
}
app.init();
