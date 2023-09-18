const container = document.querySelector("#container");
const roundResultDiv = document.createElement("div");
roundResultDiv.classList.add("round-result-cntr");

btns = document.querySelectorAll("button");

btns.forEach(btn => btn.addEventListener("click", () => {
    if (btn === document.querySelector("#rock")) {
        playRound("rock", getComputerChoice());
        container.appendChild(roundResultDiv);
    } else if (btn === document.querySelector("#paper")) {
        playRound("paper", getComputerChoice());
        container.appendChild(roundResultDiv);
    } else {
        playRound("scissors", getComputerChoice());
    }
}));

function getComputerChoice() {
    const rps = ["rock", "paper", "scissors"];
    return rps[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === "rock" || playerSelection.toLowerCase() === "paper" || playerSelection.toLowerCase() === "scissors") {
    if (playerSelection.toLowerCase() === computerSelection) {
        console.log(`Tie game! Rematch! \nPlayer Chose: ${playerSelection} \nComputer Chose: ${computerSelection}`);
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        console.log(`Round Winner: Player \nPlayer Chose: ${playerSelection} \nComputer Chose: ${computerSelection}`);
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        console.log(`Round Winner: Player \nPlayer Chose: ${playerSelection} \nComputer Chose: ${computerSelection}`);
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        console.log(`Round Winner: Player \nPlayer Chose: ${playerSelection} \nComputer Chose: ${computerSelection}`);
    } else {
        console.log(`Round Winner: Computer \nPlayer Chose: ${playerSelection} \nComputer Chose: ${computerSelection}`);
    }
} else {
        console.log("Please enter rock, paper, or scissors...");
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



/*getPlayerChoice = (playerSelection) => {
    playerSelection = prompt("Choose rock, paper, or scissors.");
    return playerSelection;
}*/







 /*   let compScore = 0;
    let playerScore = 0;
    let winner;
    let playerChoice;

    btns = document.querySelectorAll("button");
    btns.forEach(btn => btn.addEventListener("click", function(){
        if (btn === document.querySelector("#rock")) {
            playerChoice = "rock";
            playRound(playerChoice, getComputerChoice());
        } else if (btn === document.querySelector("#paper")) {
            playerChoice = "paper";
            playRound(playerChoice, getComputerChoice());
        } else {
            playerChoice = "scissors";
            playRound(playerChoice, getComputerChoice());
        }
    }));


        playRound(playerChoice, getComputerChoice());
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
            console.log(`Tie game! Rematch! \nPlayer Chose: ${playerSelection} \nComputer Chose: ${computerSelection}`);
        } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
            playerWin();
            console.log(`Round Winner: Player \nPlayer Chose: ${playerSelection} \nComputer Chose: ${computerSelection}`);
        } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
            playerWin();
            console.log(`Round Winner: Player \nPlayer Chose: ${playerSelection} \nComputer Chose: ${computerSelection}`);
        } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
            playerWin();
            console.log(`Round Winner: Player \nPlayer Chose: ${playerSelection} \nComputer Chose: ${computerSelection}`);
        } else {
            computerWin();
            console.log(`Round Winner: Computer \nPlayer Chose: ${playerSelection} \nComputer Chose: ${computerSelection}`);
        }
    } else {
            console.log("Please enter rock, paper, or scissors...");
            compScore++;
        }
    }

    function playerWin() {
        playerScore++;
        console.log("Round Win: Player");
        console.log(`Player chose: ${playerChoice} \nComputer chose: `);
    }

    function computerWin() {
        compScore++;
        console.log("Round Win: Computer");
    }

    function displayScore() {
        console.log("Player: " + playerScore);
        console.log("Computer: " + compScore);
    }
*/