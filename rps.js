function getComputerChoice() {
    const rps = ["rock", "paper", "scissors"];

    return rps[Math.floor(Math.random() * 3)];
}

function game() {

    let compScore = 0;
    let playerScore = 0;


    function playRound(playerSelection, computerSelection) {
        if (playerSelection.toLowerCase() === "rock") {
            if (computerSelection === "rock") {
                return "Tie game! Rematch!";
            } else if (computerSelection === "scissors") {
                playerScore++;
                return "Congratulations! You win!";
            } else if (computerSelection === "paper") {
                compScore++;
                return "You lose. Try again!";
            } else {
                return "Please enter rock, paper, or scissors..."
            }
        }
    }

}