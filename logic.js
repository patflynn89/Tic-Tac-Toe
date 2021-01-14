//Declare main components
let player1Turn;
let player2Turn;
let x = [document.createElement("img"), document.createElement("img"),
        document.createElement("img"), document.createElement("img"), 
        document.createElement("img")];
let circle = [document.createElement("img"), document.createElement("img"),
            document.createElement("img"), document.createElement("img"),
            document.createElement("img")];
let gameStarted = false;
let clickCounter = 0;
let xCounter = 0;
let circleCounter = 0;

/**
 * Start function
 */
function startGame() {
    player1Turn = true;
    console.log(player1Turn);
    gameStarted = true;
    console.log(gameStarted);
    initiateShapes();
}

/**
 * Initialize the shapes
 */
function initiateShapes() {
    if (gameStarted) {
        console.log("In initiate!!");
        console.log(gameStarted);
        for (let i=0; i<x.length;i++) {
            x[i].setAttribute("src", "img/x.svg");
            x[i].setAttribute("width", "100%");
            x[i].setAttribute("height", "80%");
            
            circle[i].setAttribute("src", "img/circle.svg");
            circle[i].setAttribute("width", "100%");
            circle[i].setAttribute("height", "80%");
        }
    }
}

function placeShape(clickedID) {
    if (gameStarted) {
        if (player1Turn && ((clickCounter == 0) || (clickCounter % 2) == 0)) {
            document.getElementById(clickedID).appendChild(x[xCounter]);
            clickCounter++;
            xCounter++;
        } else {
            document.getElementById(clickedID).appendChild(circle[circleCounter]);
            clickCounter++;
            circleCounter++;
        }
        
    }
}

