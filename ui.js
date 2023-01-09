function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'ROCK';
    } else if (randomNumber === 1) {
        return 'PAPER';
    } else if (randomNumber === 2) {
        return 'SCISSORS';
    }
}

let playerScore = 0;
let computerScore = 0;

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const playerEmoji = document.getElementById('playerEmoji');
const computerEmoji = document.getElementById('computerEmoji');
const score = document.getElementById('score');

// const playerScoreText = document.getElementById('playerScore');
// const computerScoreText = document.getElementById('computerScore');

const scoreTitle = document.getElementById('score-title');
const scoreSubTitle = document.getElementById('score-subtitle');

rockBtn.addEventListener('click', () => onClick('ROCK'));
paperBtn.addEventListener('click', () => onClick('PAPER'));
scissorsBtn.addEventListener('click', () => onClick('SCISSORS'));

function onClick(playerChoice) {

    if (playerScore === 5 || computerScore === 5){
        return 
    }

    console.log('Player Choice: ' + playerChoice);

    const computerChoice= getComputerChoice();
    console.log('Computer Choice: ' + computerChoice);

    updateEmojis(playerChoice, computerChoice);
    playRound(playerChoice, computerChoice);
    updateText();
}

function updateEmojis(playerChoice, computerChoice){
    if (playerChoice === 'ROCK') {
        playerEmoji.textContent = '🪨'
    } else if (playerChoice === 'PAPER') {
        playerEmoji.textContent = '📄'
    } else if (playerChoice === 'SCISSORS') {
        playerEmoji.textContent = '✂️'
    }

    if (computerChoice === 'ROCK') {
        computerEmoji.textContent = '🪨'
    } else if (computerChoice === 'PAPER') {
        computerEmoji.textContent = '📄'
    } else if (computerChoice === 'SCISSORS') {
        computerEmoji.textContent = '✂️'
    }
}

function playRound(playerChoice, computerChoice){
    if (playerChoice === computerChoice){
        console.log("Tie");
    } else if (playerChoice === "ROCK"){
        if (computerChoice === "SCISSORS"){
            console.log("You Win! Rock beats Scissors")
            playerScore += 1;
        } else if (computerChoice === "PAPER"){
            console.log("You Lose! Paper beats Rock")
            computerScore += 1;
        }
    } else if (playerChoice === "PAPER"){
        if (computerChoice === "ROCK"){
            console.log("You Win! Paper beats Rock")
            playerScore += 1;
        } else if (computerChoice === "SCISSORS"){
            console.log("You Lose! Scissors beats Paper")
            computerScore += 1;
        }
    } else if (playerChoice === "SCISSORS"){
        if (computerChoice === "PAPER"){
            console.log("You Win! Scissors beats Paper")
            playerScore += 1;
        } else if (computerChoice === "ROCK"){
            console.log("You Lose! Rock beats Scissors")
            computerScore += 1;
        }
    }
}

function updateText() {
    // playerScoreText.textContent = `Player: ${playerScore}`;
    // computerScoreText.textContent = `Computer: ${computerScore}`;
    score.textContent = `${playerScore} - ${computerScore}`

    if (playerScore === 5) {
        scoreTitle.textContent = 'Congratulations';
        scoreSubTitle.textContent = 'You Win!'
    } else if (computerScore === 5) {
        scoreTitle.textContent = 'Whoops';
        scoreSubTitle.textContent = 'You Lose!'
    }
}