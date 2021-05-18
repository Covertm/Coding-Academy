let gameActive: boolean = true;
let currentPlayer: string = "X";
let gameState: Array<string> = ['','','','','','','','','',''];

const statusDisplay = document.querySelector('.game--status');

const winningMessage: string = `Player ${currentPlayer} has won!`;
const drawMessage: string = `It's a draw! Time for a rematch`;
const currentPlayerTurn: string = `It's Player ${currentPlayer}'s turn`;
const maxTurns: number = 7;
const variable0: number = 0;
const variable1: number = 1;
const variable2: number = 2;
const player1: string = "X";
const player2: string = "O";

statusDisplay.innerHTML = currentPlayerTurn;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handlePlayerChange() {

    //    currentPlayer = currentPlayer === "X" ? "O" : "X";
        if (currentPlayer == player1){
            currentPlayer = player2;
        }
        else{
            currentPlayer = player1;
        }
    
        statusDisplay.innerHTML = currentPlayerTurn;
}

function handleCellPlayed(clickedCell: HTMLInputElement, clickedCellIndex: number) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}


function handleCellClick(clickedCellEvent) {

    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);

    let roundWon: boolean = false;

    for (let i: number = 0; i <= maxTurns; i++) {
        const winCondition = winningConditions[i];
        let box1: string = gameState[winCondition[variable0]];
        let box2: string = gameState[winCondition[variable1]];
        let box3: string = gameState[winCondition[variable2]];
        if (box1 === '' || box2 === '' || box3 === '') {
            continue;
        }
        if (box1 === box2 && box1 === box3) {
            roundWon = true;
            break
        }
    }

    if (roundWon) {
        statusDisplay.innerHTML = winningMessage;
        gameActive = false;
        return;
    }

    let roundDraw: boolean = !gameState.includes("");

    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage;
        gameActive = false;
        return;
    }

    handlePlayerChange();
}

function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn;
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);