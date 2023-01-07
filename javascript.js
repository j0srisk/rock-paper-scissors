const CHOICES = ["ROCK", "PAPER", "SCISSORS"];

function getPlayerChoice(){
    
    let PlayerChoice = prompt("Enter your choice: ").toUpperCase();

    console.log("Player: " + PlayerChoice);

    return PlayerChoice;
}

function getComputerChoice(){

    let ComputerChoice = CHOICES[Math.floor(Math.random() * 3)];

    console.log("Computer: " + ComputerChoice);

    return ComputerChoice;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "Tie";
    } else if (playerSelection === "ROCK"){
        if (computerSelection === "SCISSORS"){
            return "You Win! Rock beats Scissors";
        } else if (computerSelection === "PAPER"){
            return "You Lose! Paper beats Rock";
        }
    } else if (playerSelection === "PAPER"){
        if (computerSelection === "ROCK"){
            return "You Win! Paper beats Rock";
        } else if (computerSelection === "SCISSORS"){
            return "You Lose! Scissors beats Paper";
        }
    } else if (playerSelection === "SCISSORS"){
        if (computerSelection === "PAPER"){
            return "You Win! Scissors beats Paper";
        } else if (computerSelection === "ROCK"){
            return "You Lose! Rock beats Scissors";
        }
    }
}

console.log(playRound(getPlayerChoice(), getComputerChoice()));