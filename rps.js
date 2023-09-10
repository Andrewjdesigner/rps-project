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
    let winner;

    for(let i = 1; i < 5; i++) {

        console.log("Round " + i + ":");

        playRound(getPlayerChoice(), getComputerChoice());
        displayScore();

    }

    if(playerScore = 5) {
        winner = "Player";
    } else {
        winner = "Computer";
    }

    console.log(`Game finished! The winner is: ${winner}`);

    function playRound(playerSelection, computerSelection) {
        if (playerSelection.toLowerCase() === computerSelection) {
            console.log("Tie game! Rematch!");
        } else if (playerSelection.toLowerCase() === "rock") {
            if (computerSelection === "scissors") {
                playerWin();
            } else if (computerSelection === "paper") {
                computerWin();
            }
        } else if (playerSelection.toLowerCase() === "paper") {
            if (computerSelection === "rock") {
                playerWin();
            } else if (computerSelection === "scissors") {
                computerWin();
            }
        } else if (playerSelection.toLowerCase() === "scissors") {
            if (computerSelection === "paper") {
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
        console.log("Round Win: Player");
    }

    function computerWin() {
        compScore++;
        console.log("Round Win: Computer");
    }

    function displayScore() {
        console.log("Player: " + playerScore);
        console.log("Computer: " + compScore);
    }
}