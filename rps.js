function getComputerChoice() {
    const rps = ["rock", "paper", "scissors"];

    return rps[Math.floor(Math.random() * 3)];
}

getPlayerChoice = (playerSelection) => {
    playerSelection = prompt("Choose rock, paper, or scissors.");
    return playerSelection;
}

function game() {

    let compScore = 0;
    let playerScore = 0;

    playRound(getPlayerChoice(), getComputerChoice());
    displayScore();

    function playRound(playerSelection, computerSelection) {
        if (playerSelection.toLowerCase() === "rock") {
            if (computerSelection === "rock") {
                return "Tie game! Rematch!";
            } else if (computerSelection === "scissors") {
                playerWin();
            } else if (computerSelection === "paper") {
                computerWin();
            }
        } else if (playerSelection.toLowerCase() === "paper") {
            if (computerSelection === "paper") {
                return "Tie game! Rematch!";
            } else if (computerSelection === "rock") {
                playerWin();
            } else if (computerSelection === "scissors") {
                computerWin();
            }
        } else if (playerSelection.toLowerCase() === "scissors") {
            if (computerSelection === "scissors") {
                return "Tie game! Rematch!";
            } else if (computerSelection === "paper") {
                playerWin();
            } else if (computerSelection === "rock") {
                computerWin();
            }
        }  else {
            return "Please enter rock, paper, or scissors..."
        }
    }

    function playerWin() {
        playerScore++;
        console.log("Congratulations! You win.");
    }

    function computerWin() {
        compScore++;
        console.log("You lose. Try again!");
    }

    function displayScore() {
        console.log("Player: " + playerScore);
        console.log("Computer: " + compScore);
    }
}