const CHOICES = ["ROCK", "PAPER", "SCISSORS"];

function getPlayerChoice(){
    
    let PlayerChoice = prompt("Enter your choice: ").toUpperCase();

    console.log("Player Choice: " + PlayerChoice);

    return PlayerChoice;
}

function getComputerChoice(){

    let ComputerChoice = CHOICES[Math.floor(Math.random() * 3)];

    console.log("Computer Choice: " + ComputerChoice);

    return ComputerChoice;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        console.log("Tie")
        return "Tie";
    } else if (playerSelection === "ROCK"){
        if (computerSelection === "SCISSORS"){
            console.log("You Win! Rock beats Scissors")
            return "Win";
        } else if (computerSelection === "PAPER"){
            console.log("You Lose! Paper beats Rock")
            return "Lose";
        }
    } else if (playerSelection === "PAPER"){
        if (computerSelection === "ROCK"){
            console.log("You Win! Paper beats Rock")
            return "Win";
        } else if (computerSelection === "SCISSORS"){
            console.log("You Lose! Scissors beats Paper")
            return "Lose";
        }
    } else if (playerSelection === "SCISSORS"){
        if (computerSelection === "PAPER"){
            console.log("You Win! Scissors beats Paper")
            return "Win";
        } else if (computerSelection === "ROCK"){
            console.log("You Lose! Rock beats Scissors")
            return "Lose";
        }
    }
}

function game(){

    let PlayerWins = 0;
    let ComputerWins = 0;

    for (let i = 0; i < 5; i++){
        console.log("Game " + (i+1));
        let result = playRound(getPlayerChoice(), getComputerChoice());

        if (result === "Win"){
            PlayerWins = PlayerWins + 1;
        } else if (result === "Lose") {
            ComputerWins = ComputerWins + 1;
        }

        console.log("")
    }

    console.log("Player Wins: " + PlayerWins);
    console.log("Computer Wins: " + ComputerWins);
}

console.log("Rock Paper Scissors!!!")
console.log("")

game();