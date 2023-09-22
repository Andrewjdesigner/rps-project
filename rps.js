let playerScore = 0;
let computerScore = 0;

const btns = document.querySelectorAll(".container--rps-buttons button");
const restartButton = document.querySelector(".button--restart")

btns.forEach(btn => btn.addEventListener("click", () => {
    if (btn === document.querySelector("#rock")) {
        playRound("Rock", getComputerChoice());
    } else if (btn === document.querySelector("#paper")) {
        playRound("Paper", getComputerChoice());
    } else {
        playRound("Scissors", getComputerChoice());
    }
}));

restartButton.addEventListener("click", restartGame);

function restartGame() {
    playerScore = 0;
    computerScore = 0;

    const playerScoreDisplay = document.querySelector("#player-score");
    const computerScoreDisplay = document.querySelector("#computer-score");
    const winnerDisplay = document.querySelector("#round-winner");
    const playerChoiceDisplay = document.querySelector("#player-choice");
    const compChoiceDisplay = document.querySelector("#computer-choice");

    playerChoiceDisplay.textContent = "";
    compChoiceDisplay.textContent = "";
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    winnerDisplay.textContent = "";

    btns.forEach(btn => btn.removeAttribute("disabled"));
}

function getComputerChoice() {
    const rps = ["Rock", "Paper", "Scissors"];
    return rps[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {

    if (playerScore < 5 && computerScore < 5) {
        const playerChoiceDisplay = document.querySelector("#player-choice");
        playerChoiceDisplay.textContent = playerSelection;

        const compChoiceDisplay = document.querySelector("#computer-choice");
        compChoiceDisplay.textContent = computerSelection;

        if (playerSelection === computerSelection) {
            tieGame();
        } else if (playerSelection === "Rock" && computerSelection === "Scissors"
                || playerSelection === "Paper" && computerSelection === "Rock"
                || playerSelection === "Scissors" && computerSelection === "Paper") {
                    playerWin();
        } else {
            computerWin();
        } 
    }
}

function playerWin() {
    const winnerDisplay = document.querySelector("#round-winner");
    winnerDisplay.textContent = "Player Wins!";
    playerScore++;
    scoreDisplay = document.querySelector("#player-score");
    scoreDisplay.textContent = playerScore;
    if (playerScore === 5) {
        btns.forEach(btn => btn.setAttribute("disabled", true));
        winnerDisplay.textContent = "Game Over. Player Wins!";
    }
}

function computerWin() {
    const winnerDisplay = document.querySelector("#round-winner");
    winnerDisplay.textContent = "Computer Wins!";
    computerScore++;
    scoreDisplay = document.querySelector("#computer-score");
    scoreDisplay.textContent = computerScore;
    if (computerScore === 5) {
        btns.forEach(btn => btn.setAttribute("disabled", true));
        winnerDisplay.textContent = "Game Over. Computer Wins!";
    }
}

function tieGame() {
    const winnerDisplay = document.querySelector("#round-winner");
    winnerDisplay.textContent = "Tie Game!";
}