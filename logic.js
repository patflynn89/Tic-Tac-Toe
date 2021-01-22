//Declare main components
let placedXes = [];
let placedCircles = [];

//All X'es are stored in an array
let x = [document.createElement("img"), document.createElement("img"),
document.createElement("img"), document.createElement("img"),
document.createElement("img")];

//All circles are stored in an array
let circle = [document.createElement("img"), document.createElement("img"), document.createElement("img"), 
document.createElement("img"), document.createElement("img")];

let gameStarted = true;
let player1Turn = true;
let clickCounter = 0;
let xCounter = 0;
let circleCounter = 0;

//All the winning combinations of the gameboard
const winningCombination = [['cell1', 'cell2', 'cell3'],    //go with for-loop and check if the first one is cell1 or cell4 or cell7                  
                            ['cell4', 'cell5', 'cell6'],    //check if array.contents("cell1", "cell2"....)
                            ['cell7', 'cell8', 'cell9'],           
                            
                            ['cell1', 'cell4', 'cell7'],    //go with for-loop and check if the first one is cell1 or cell2 or cell3       
                            ['cell2', 'cell5', 'cell8'],           
                            ['cell3', 'cell6', 'cell9'],           
                            
                            ['cell1', 'cell5', 'cell9'],    //go with for-loop and check if the first one is cell1 or cell3
                            ['cell3', 'cell5', 'cell7']]           

/**
 * Start the Game
 */
function startGame() {
        if (gameStarted) {
            initiateShapes();
            addListeners();
    }        
}

/**
 * Reset the game
 */
function reset() {
    window.location.reload();
}

/**
 * Initialize the shapes
 */
function initiateShapes() {
        for (let i = 0; i < x.length; i++) {
            x[i].setAttribute("src", "img/x.svg");
            x[i].setAttribute("width", "100%");
            x[i].setAttribute("height", "95%");

            circle[i].setAttribute("src", "img/circle.svg");
            circle[i].setAttribute("width", "100%");
            circle[i].setAttribute("height", "95%");
        }
}

/**
 * Method how to handle the user's input
 * @param {} event The event when the user clicks on a field
 */
function handleClick(event) {
        if (player1Turn && ((clickCounter === 0) || (clickCounter % 2) === 0)) {
            document.getElementById(event.target.id).appendChild(x[xCounter]);
            //Store it in const id    
            const id = event.target.id;;
            console.log(id);
            placedXes.push(id);
            clickCounter++;
            xCounter++;
            if (placedXes.length >= 3) {
                checkGame(placedXes);
            }
            player1Turn = false;
        } else {
            document.getElementById(event.target.id).appendChild(circle[circleCounter]);
            const id = event.target.id;;
            console.log(id);
            placedCircles.push(id);
            clickCounter++;
            circleCounter++;
            if (placedCircles.length >= 3) {
                checkGame(placedCircles);
            }
            player1Turn = true;
            
        }

}

/**
 * Add eventlisteners and place the Shapes
 */
function addListeners(move) {
    let tmpCells;
    for (let i = 1; i <= 9; i++) {
        tmpCells = "cell" + i;
        document.getElementById(tmpCells).addEventListener("click", handleClick, { once: true});            
    }
}

/**
 * Checks if there's already a winner
 * @param {Array} move 
 */
function checkGame(move) {
    if ((move.includes("cell1") && move.includes("cell2") && move.includes("cell3")) ||
        (move.includes("cell4") && move.includes("cell5") && move.includes("cell6")) || 
        (move.includes("cell7") && move.includes("cell8") && move.includes("cell9")) ||         
        (move.includes("cell1") && move.includes("cell4") && move.includes("cell7")) ||
        (move.includes("cell2") && move.includes("cell5") && move.includes("cell8")) ||
        (move.includes("cell3") && move.includes("cell6") && move.includes("cell9")) ||           
        (move.includes("cell1") && move.includes("cell5") && move.includes("cell9")) ||
        (move.includes("cell3") && move.includes("cell5") && move.includes("cell7"))   
    ) {
        if (player1Turn) {
            alert("Baby Spieler 1 (der mit den Xen) hat gewonnen!!") ;
            window.location.reload();
        } else {
            alert("No way dude, der mit den Circles hat gewonnen!");
            window.location.reload();
        }
        
    }
    
}
