let playerScore = 0;
let computerScore = 0;

const btns = document.querySelectorAll("button");

btns.forEach(btn => btn.addEventListener("click", () => {
    if (btn === document.querySelector("#rock")) {
        playRound("Rock", getComputerChoice());
    } else if (btn === document.querySelector("#paper")) {
        playRound("Paper", getComputerChoice());
    } else {
        playRound("Scissors", getComputerChoice());
    }
}));

function getComputerChoice() {
    const rps = ["Rock", "Paper", "Scissors"];
    return rps[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {

    if (playerScore < 3 && computerScore < 3) {
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
    } else {
        btns.forEach(btn => btn.setAttribute("disabled", true));
    }
}

function playerWin() {
    const winnerDisplay = document.querySelector("#round-winner");
    winnerDisplay.textContent = "Player Wins!";
    playerScore++;
    console.log("Player: " + playerScore);
}

function computerWin() {
    const winnerDisplay = document.querySelector("#round-winner");
    winnerDisplay.textContent = "Computer Wins!";
    computerScore++;
    console.log("Computer: " + computerScore);
}

function tieGame() {
    const winnerDisplay = document.querySelector("#round-winner");
    winnerDisplay.textContent = "Tie Game!";
}