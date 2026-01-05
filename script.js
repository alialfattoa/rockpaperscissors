
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
