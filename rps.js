function getComputerChoice() {
    const rps = ["rock", "paper", "scissors"];

    return rps[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "Tie game! Rematch!";
        } else if (computerSelection === "scissors") {
            return "Congratulations! You win!";
        } else if (computerSelection === "paper") {
            return "You lose. Try again!";
        } else {
            return "Please enter rock, paper, or scissors..."
        }
    }
}