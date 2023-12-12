const boxes = document.querySelectorAll(".box")
const playerName = document.getElementById("playerName")
const resetBtn = document.getElementById("resetBtn")
const newGame = document.getElementById("newGame")
let playerTurn = true;
let boxCounter = 0;
winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
function disableboxes() {
    for (box of boxes) {
        box.disabled = true
        playerTurn = true
    }
}
resetBtn.addEventListener('click', () => {
    for (box of boxes) {
        playerName.innerText = ""
        box.innerText = ""
        box.disabled = false
        playerTurn = true
    }
})
newGame.addEventListener('click', () => {
    for (box of boxes) {
        playerName.innerText = ""
        box.innerText = ""
        box.disabled = false
        playerTurn = true
        boxCounter = 0
        resetBtn.style.visibility = 'visible'
    }
})
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (playerTurn) {
            box.style.color = "red"
            box.innerText = "O";
            playerTurn = false;
        }
        else {
            box.style.color = "green"
            box.innerText = "X"
            playerTurn = true
        }
        box.disabled = true
        checkWinner();
        console.log(boxCounter);
        boxCounter++;
        if (boxCounter === 9) {
            playerName.innerText = "Nobody Won please Start New Game"
            boxCounter = 0
        }
    })
})
const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                playerName.innerText = `Winner Is ${pos1}`
                resetBtn.style.visibility = 'hidden'
                disableboxes()
                boxCounter = 0
            }

        }
    }
}
