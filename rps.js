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

function game(playerChoice, computerChoice) {
    let playerScore = 0;
    let computerScore = 0;
    
}

function playRound(playerSelection, computerSelection) {


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

function playerWin() {
    const winnerDisplay = document.querySelector("#round-winner");
    winnerDisplay.textContent = "Player Wins!";
}

function computerWin() {
    const winnerDisplay = document.querySelector("#round-winner");
    winnerDisplay.textContent = "Computer Wins!";
}

function tieGame() {
    const winnerDisplay = document.querySelector("#round-winner");
    winnerDisplay.textContent = "Tie Game!";
}