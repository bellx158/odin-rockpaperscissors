
function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3); // Generates a random integer (0, 1, or 2)
  if (randomNumber === 0) {
    return "rock"; 
  } else if (randomNumber === 1) {
    return "paper"; 
  } else {
    return "scissors"; 
  }

}

console.log(getComputerChoice());