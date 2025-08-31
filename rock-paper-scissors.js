var humanScore = 0;
var computerScore = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  const computerChoice = getRandomInt(3);

  if (computerChoice == 0) {
    return "rock";
  } else if (computerChoice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const userInput = prompt("Make your choice\nrock, paper or scissors").toLowerCase();
  if (userInput != "rock" && userInput != "paper" && userInput != "scissors") {
    alert("You put the incorrect term!");
    getHumanChoice()
  }
  humanScore += 1;
  return userInput;
}

function playRound(humanChoice, computerChoice) {

  if ((humanChoice === "rock" && computerChoice === "scissors")
    || (humanChoice === "paper" && computerChoice === "rock")
    || (humanChoice === "scissors" && computerChoice === "paper")) {

    humanScore += 1;
    console.log("You Win! " + humanChoice + " beats " + computerChoice);
  }

  else if ((humanChoice === "rock" && computerChoice === "rock")
    || (humanChoice === "paper" && computerChoice === "paper")
    || (humanChoice === "scissors" && computerChoice === "scissors")) {

    console.log("Tie!");
  }

  else {

    computerScore *= 1;
    console.log("You Lose! " + computerChoice + " beats " + humanChoice);
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);