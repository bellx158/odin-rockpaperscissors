   
  let humanScore = 0;
  let computerScore = 0;

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

function getHumanChoice(){
    let userInput = prompt("Choose rock, paper, or scissors");

   if  (userInput) { 
       return userInput.toLowerCase();

    } else {
               return "";
           }
    }
 console.log(getHumanChoice());


  function playRound(humanChoice, computerChoice){

    const normalizedHumanChoice = humanChoice.toLowerCase();

    let roundResult = ""; 

    if (normalizedHumanChoice === computerChoice) {
        roundResult = `It's a tie! Both chose ${normalizedHumanChoice}.`;
    }
    // Win conditions
    else if (
        (normalizedHumanChoice === "rock" && computerChoice === "scissors") ||
        (normalizedHumanChoice === "paper" && computerChoice === "rock") ||
        (normalizedHumanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        roundResult = `You win! ${normalizedHumanChoice} beats ${computerChoice}.`;
    }
    //Computer win conditions
    else {
        computerScore++;
        roundResult = `You lose! ${computerChoice} beats ${normalizedHumanChoice}.`;
    }

    console.log(roundResult);
    console.log(`Current Score: Human ${humanScore} - Computer ${computerScore}`);

   
}


