function getComputerChoice() {
    const rps = ["Rock", "Paper", "Scissors"];

    return rps[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock") {
        if (computerSelection === "Rock") {
            return "Tie game! Try again.";
        } else if (computerSelection === "Scissors") {
            return "Congratulations! You win!";
        } else {
            return "You lose. Try again!";
        }
        
    }
}