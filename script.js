   
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

    } 
     else {
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

function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;

  
    function playRound(humanChoice, computerChoice) {
        
        const normalizedHumanChoice = humanChoice.toLowerCase();

        let roundResult = "";

        
        if (normalizedHumanChoice === computerChoice) {
            roundResult = `It's a tie! Both chose ${normalizedHumanChoice}.`;
        }
      
        else if (
            (normalizedHumanChoice === "rock" && computerChoice === "scissors") ||
            (normalizedHumanChoice === "paper" && computerChoice === "rock") ||
            (normalizedHumanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++; 
            roundResult = `You win! ${normalizedHumanChoice} beats ${computerChoice}.`;
        }
        
        else {
            computerScore++; 
            roundResult = `You lose! ${computerChoice} beats ${normalizedHumanChoice}.`;
        }

        
        console.log(roundResult);
        console.log(`Current Score: Human ${humanScore} - Computer ${computerScore}`);
    }

    console.log("--- Starting Rock Paper Scissors Game (5 Rounds) ---");

   
    for (let i = 0; i < 5; i++) {
        console.log(`\n--- Round ${i + 1} ---`);
        const humanSelection = getHumanChoice();
     
        if (humanSelection === "") {
            console.log("Round cancelled: Human did not make a choice. Ending game prematurely.");
            break; 
        }

        const computerSelection = getComputerChoice();

        console.log(`You chose: ${humanSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
      
        playRound(humanSelection, computerSelection);
    }

    console.log("\n--- Game Over ---");
    console.log(`Final Score: Human ${humanScore} - Computer ${computerScore}`);

    
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Better luck next time! The Computer won the game.");
    } else {
        console.log("It's a draw! The game ended in a tie.");
    }
}


