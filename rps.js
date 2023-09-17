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

        console.log("Round " + (i + 1) + ":");

        playRound(getPlayerChoice(), getComputerChoice());
        displayScore();

    resultScreen();

    function resultScreen(){
        if(playerScore === compScore) {
        console.log(`Game finished! It's a tie!
        Final Score...
        Player: ${playerScore}
        Computer: ${compScore}`);
        } else {
            if(playerScore > compScore) {
                winner = "Player";
            } else {
                winner = "Computer";
            }
        
            console.log(`Game finished! The winner is: ${winner}
            Final Score...
            Player: ${playerScore}
            Computer: ${compScore}`);
        }
    }

    function playRound(playerSelection, computerSelection) {
        if(playerSelection.toLowerCase() === "rock" || playerSelection.toLowerCase() === "paper" || playerSelection.toLowerCase() === "scissors") {
        if (playerSelection.toLowerCase() === computerSelection) {
            console.log("Tie game! Rematch!");
        } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
            playerWin();
        } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
            playerWin();
        } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
            playerWin();
        } else {
            computerWin();
        }
    } else {
            console.log("Please enter rock, paper, or scissors...");
            compScore++;
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