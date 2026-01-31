let humanScore = 0;
let computerScore = 0;
let mainDiv = document.querySelector("#mainDiv");

let rockButton = document.createElement("button");
rockButton.textContent = "rock";
mainDiv.appendChild(rockButton);
rockButton.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

let paperButton = document.createElement("button");
paperButton.textContent = "paper";
mainDiv.appendChild(paperButton);
paperButton.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

let scissorsButton = document.createElement("button");
scissorsButton.textContent = "scissors";
mainDiv.appendChild(scissorsButton);
scissorsButton.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

let resultDisplay = document.createElement("div");
mainDiv.appendChild(resultDisplay);

function getComputerChoice() {
  // Generate a random number from 0-2
  let randomNumber = Math.floor(Math.random() * 3);
  let choice;
  // Set choice according to random number ( 0 -> rock, 1 -> paper, 2 -> scissors )
  if (randomNumber === 0) {
    choice = "rock";
  } else if (randomNumber === 1) {
    choice = "paper";
  } else {
    choice = "scissors";
  }

  return choice;
}

/* function getHumanChoice() {
  let choice;
  let chosenNumber = parseInt(
    prompt("Choose: 1 - Rock, 2 - Paper, 3 - Scissors"),
  );
  if (chosenNumber === 1) {
    choice = "rock";
  } else if (chosenNumber === 2) {
    choice = "paper";
  } else {
    choice = "scissors";
  }

  return choice;
} */

function playRound(humanChoice, computerChoice) {
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore === 5) {
      resultDisplay.textContent =
        "Final Result:\n" +
        "You win!\n" +
        "Your score: " +
        humanScore +
        "\n Computer score: " +
        computerScore;
    } else if (computerScore === 5) {
      resultDisplay.textContent =
        "Final Result:\n" +
        "You lose.\n" +
        "Your score: " +
        humanScore +
        "\n Computer score: " +
        computerScore;
    } else {
      resultDisplay.textContent =
        "Final Result:\n" +
        "It's a tie!\n" +
        "Your score: " +
        humanScore +
        "\n Computer score: " +
        computerScore;
    }
    humanScore = 0;
    computerScore = 0;
  } else {
    if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      resultDisplay.textContent = "You lose. Paper beats rock.";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      resultDisplay.textContent = "You Win! Rock beats paper.";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
      resultDisplay.textContent = "You Lose. Scissors beats paper.";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      resultDisplay.textContent = "You Win! Scissors beats paper.";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
      resultDisplay.textContent = "You Lose. Rock beats scissors.";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      resultDisplay.textContent = "You Win! Rock beats scissors!";
    } else {
      resultDisplay.textContent =
        computerChoice + " and " + humanChoice + "\nIt's a tie!";
    }
  }
}

/* function playGame() {
  let humanSelection;
  let computerSelection;

  console.log("-------- GAME SUMMARY ---------");
  if (humanScore > computerScore) {
    console.log("You win!");
    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);
  } else if (computerScore > humanScore) {
    console.log("You lose.");
    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);
  } else {
    console.log("It's a tie.");
    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);
  }
} */
