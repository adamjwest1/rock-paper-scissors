

function getComputerChoice() {
    let cNum = Math.floor((Math.random())*3);
    if (cNum === 0) {
        computerSelection = "rock";
    }else if (cNum === 1) {
        computerSelection = "paper";
    }else if (cNum === 2) {
        computerSelection = "scissors";
    }
    return computerSelection;
}

function getHumanChoice() {
    let humanSelection = prompt("Type 'Rock', 'Paper', or 'Scissors'");
    return humanSelection;
}

function playRound(humanSelection, computerSelection) {
    humanSelection = humanSelection.toLowerCase();
    if (humanSelection === "rock" && computerSelection === "scissors") {
        console.log("Rock beats Scissors! You Win!");
        humanScore += 1;
        return;
    }else if (humanSelection === "rock" && computerSelection === "paper") {
        console.log("Paper beats rock! You lose...");
        computerScore += 1;
        return;
    }else if (humanSelection === "paper" && computerSelection === "rock") {
        console.log("Paper beats Rock! You win!");
        humanScore += 1;
        return;
    }else if (humanSelection === "paper" && computerSelection ==="scissors") {
        console.log("Scissors beats Paper! You lose...");
        computerScore += 1;
        return;
    }else if (humanSelection === "scissors" && computerSelection === "paper") {
        console.log("Scissors beatss Paper! You win!");
        humanScore += 1;
        return;
    }else if (humanSelection === "scissors" && computerSelection === "rock") {
        console.log("Rock beats Scissors! You lose...");
        computerScore += 1;
        return;
    }else {
        console.log("You tied!");
        return "You tied!";
    }
    
}

let humanScore = 0;
let computerScore = 0;


const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");
const newGameBtn = document.querySelector(".newGameBtn");
const playerScore = document.querySelector(".playerScore");
const compScore = document.querySelector(".computerScore");
const gameBoard = document.querySelector(".gameBoard");

rockBtn.addEventListener("click", () => {
    humanSelection = "rock";
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    playerScore.textContent = humanScore;
    compScore.textContent = computerScore;
    if (humanScore == 5 || computerScore == 5) {
        gameBoard.textContent = "Game Over!"
    
    if (humanScore === 5) {
        gameBoard.textContent += "You Win!"
    }else {
        gameBoard.textContent += "You Lost..."
    }
}
})
paperBtn.addEventListener("click", () => {
    humanSelection = "paper";
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    playerScore.textContent = humanScore;
    compScore.textContent = computerScore;
    if (humanScore == 5 || computerScore == 5) {
        gameBoard.textContent = "Game Over!"
    
    if (humanScore == 5) {
        gameBoard.textContent += "You Win!"
    }else {
        gameBoard.textContent += "You Lost..."
    }
}
})
scissorsBtn.addEventListener("click", () => {
    humanSelection = "scissors"
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    playerScore.textContent = humanScore;
    compScore.textContent = computerScore;
    if (humanScore == 5 || computerScore == 5) {
        gameBoard.textContent = "Game Over!"
    
    if (humanScore == 5) {
        gameBoard.textContent += "You Win!"
    }else {
        gameBoard.textContent += "You Lost..."
    }
}
})
newGameBtn.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    playerScore.textContent = humanScore;
    compScore.textContent = computerScore;
    location.reload();
    
})

playerScore.textContent = humanScore;
compScore.textContent = computerScore;


