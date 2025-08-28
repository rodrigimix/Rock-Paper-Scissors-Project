function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function getComputerChoice() {
  const computerChoice = getRandomInt(3);

  console.log(computerChoice);

  if (computerChoice == 0) {
    return "rock";
  } else if (computerChoice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const userInput = prompt("Make your choice\nrock, paper or scissors");
  if (userInput != "rock" && userInput != "paper" && userInput != "scissors") {
    alert("You put the incorrect term!");
    getHumanChoice()
  }
  return userInput;
}

console.log(getHumanChoice())
