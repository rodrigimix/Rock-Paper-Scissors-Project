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

console.log(getComputerChoice())
