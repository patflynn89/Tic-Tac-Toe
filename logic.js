//Declare main components
let player1Turn;
let placedXes = [];
let placedCircles = [];

//All X'es are stored in an array
let x = [document.createElement("img"), document.createElement("img"),
document.createElement("img"), document.createElement("img"),
document.createElement("img")];

//All circles are stored in an array
let circle = [document.createElement("img"), document.createElement("img"), document.createElement("img"), 
document.createElement("img"), document.createElement("img")];

let gameStarted = false;
let clickCounter = 0;
let xCounter = 0;
let circleCounter = 0;

//GameBoard consists of two dimensional array
const gameBoardGUI = [[document.getElementById("cell1"), document.getElementById("cell2"), document.getElementById("cell3")],
[document.getElementById("cell4"), document.getElementById("cell5"), document.getElementById("cell6")],
[document.getElementById("cell7"), document.getElementById("cell8"), document.getElementById("cell9")]];

const gameBoard = [[1, 2, 3], 
                   [4, 5, 6],
                   [7, 8, 9]];

//All the winning combinations of the gameboard
const winningCombination = [[1, 2, 3],
                            [4, 5, 6],
                            [7, 8, 9],
                            [1, 4, 7],
                            [2, 5, 8],
                            [3, 6, 9],
                            [1, 5, 9],
                            [3, 5, 7]]

/**
 * Start the Game
 */
function startGame() {
    player1Turn = true;
    gameStarted = true;
    initiateShapes();
    eventsAdded();
}

/**
 * Initialize the shapes
 */
function initiateShapes() {
    if (gameStarted) {
        for (let i = 0; i < x.length; i++) {
            x[i].setAttribute("src", "img/x.svg");
            x[i].setAttribute("width", "100%");
            x[i].setAttribute("height", "95%");

            circle[i].setAttribute("src", "img/circle.svg");
            circle[i].setAttribute("width", "100%");
            circle[i].setAttribute("height", "95%");
        }
    }
}

/**
 * Add eventlisteners and place the Shapes
 */
function eventsAdded() {
    let tmpCells;
    for (let i = 1; i < 10; i++) {
        tmpCells = "cell" + i;
        document.getElementById(tmpCells).addEventListener("click", function (event) {
            if (gameStarted) {
                if (player1Turn && ((clickCounter === 0) || (clickCounter % 2) === 0)) {
                    placedXes.push(document.getElementById(event.target.id).appendChild(x[xCounter]));
                    console.log(placedXes[0]);
                    clickCounter++;
                    xCounter++;
                    player1Turn = false;
                    // checkGame(move);
                } else {
                    placedCircles.push(document.getElementById(event.target.id).appendChild(circle[circleCounter]));
                    console.log(placedCircles[0]);
                    clickCounter++;
                    circleCounter++;
                    player1Turn = true;
                    //  checkGame();
                }

            }


        });
    }
}

function checkGame(move) {
    /**
     * remove move from gameBoard, if the removed moves are an winning combination, then
     *  there is a winner
     * */
    this.gameBoard

}
