function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3 + 1);
  if (computerChoice === 1) {
    computerChoice = "rock";
  } else if (computerChoice === 2) {
    computerChoice = "paper";
  } else if (computerChoice === 3) {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function playRound() {
  let playerSelection = prompt("Enter your choice: ").toLowerCase();
  let computerSelection = getComputerChoice();
  if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("Player wins! Rock beats scissors");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("Computer wins! Paper beats rock");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("Computer Wins! Rock beats paper");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("Player wins! Scissors beats paper.");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("Computer wins! Scissors beats paper.");
  } else if (playerSelection === computerSelection) {
    console.log("It is a tie!");
  }
}

playRound();
