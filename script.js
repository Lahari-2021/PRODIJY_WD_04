const board = document.getElementById('board');
const message = document.getElementById('message');
let currentPlayer = 'X';
let cells = Array.from(document.getElementsByClassName('cell'));
let gameState = ['', '', '', '', '', '', '', '', ''];
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleMove(cellIndex) {
    if (gameState[cellIndex] === '' && !checkWinner()) {
        gameState[cellIndex] = currentPlayer;
        cells[cellIndex].innerText = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        checkWinner();
    }
}

function checkWinner() {
    for (let combo of winningCombos) {
        let [a, b, c] = combo;
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            message.innerText = `${gameState[a]} wins!`;
            return true;
        }
    }
    if (gameState.every(cell => cell !== '')) {
        message.innerText = "It's a draw!";
        return true;
    }
    return false;
}

function resetGame() {
    gameState = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    cells.forEach(cell => cell.innerText = '');
    message.innerText = '';
}
