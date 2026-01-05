    let humanScore = 0;
    let computerScore = 0; 
    
function getComputerChoice () {
    // Generate a random number from 0-2
    let randomNumber = Math.floor(Math.random()*3);
    let choice;
    // Set choice according to random number ( 0 -> rock, 1 -> paper, 2 -> scissors )
    if (randomNumber === 0) {
        choice = "rock";
    }
    else if (randomNumber === 1) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }

    return choice;
}

function getHumanChoice () {

    let choice
    let chosenNumber = parseInt(prompt("Choose: 1 - Rock, 2 - Paper, 3 - Scissors"));
    if (chosenNumber === 1) {
        choice = "rock";
    }
    else if (chosenNumber === 2) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }

    return choice;
}

function playRound (humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose. Paper beats rock.");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You Win! Rock beats paper.");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose. Scissors beats paper.");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper.");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose. Rock beats scissors.");
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors!");
        humanScore++;
    }
    else{
        console.log(computerChoice + " and "+humanChoice);
        console.log("It's a tie!");
    }
}

function playGame () { 
    let humanSelection;
    let computerSelection;

    for (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

     console.log("-------- GAME SUMMARY ---------");
    if (humanScore > computerScore) {
        console.log("You win!");
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
    }
    else if (computerScore > humanScore) {
        console.log("You lose.");
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
    }
    else {
        console.log("It's a tie.");
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
    }
}

playGame();