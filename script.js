let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor((Math.random() * 10)); 


function compareGuesses (currentHumanGuess, computerGuess, target) {
// const differenceHumanGuess = (target, currentHumanGuess) =>  Math.abs(target - currentHumanGuess);   
const differenceHumanGuess = Math.abs(target - currentHumanGuess);   
// const differenceComputerGuess = (target, computerGuess) =>  Math.abs(target - computerGuess);   
const differenceComputerGuess = Math.abs(target - computerGuess);   
if (differenceHumanGuess <= differenceComputerGuess) {
    return true; 
}
else {
    return false;
    } 
}


function updateScore (winner) {

if (winner === "human") {
    humanScore ++; 
}
else if (winner === "computer") {
    computerScore ++; 
} 
}

const advanceRound = () =>  {
    currentRoundNumber ++; 
}



// Somehow FINALscript.js is pulling humanGuess somewhere. I have no idea how this is a parameter. 
// After further research it appears that there is a 