let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
  let randomNumber = Math.random();
  if(randomNumber < (1/3)){
    return 'Rock';
  }else if(randomNumber >= (1/3) && randomNumber < (2/3)){
    return 'Paper';
  }else{
    return 'Scissors';
  }
}

function getHumanChoice(){
  let humanChoice = prompt("Choose an option");
  return humanChoice;
}

function displayScore(){
  console.log(`Score => You: ${humanScore}, Computer: ${computerScore}`);
}

function playRound(computerChoice, humanChoice){
  computerChoice = getComputerChoice();
  humanChoice = getHumanChoice();
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === 'rock'){
    if(computerChoice === 'Rock'){
      console.log ("It's a tie!");
      displayScore();
    }else if(computerChoice === 'Paper'){
      console.log("You lose!");
      computerScore ++;
      displayScore();
    }else{
      console.log("You win!")
      humanScore++;
      displayScore();
    }
  }
  if (humanChoice === 'paper'){
    if(computerChoice === 'Paper'){
      console.log ("It's a tie!");
      displayScore();
    }else if(computerChoice === 'Scissors'){
      console.log("You lose!");
      computerScore ++;
      displayScore();
    }else{
      console.log("You win!")
      humanScore++;
      displayScore();
    }
  }
  if (humanChoice === 'scissors'){
    if(computerChoice === 'Scissors'){
      console.log ("It's a tie!");
      displayScore();
    }else if(computerChoice === 'Rock'){
      console.log("You lose!");
      computerScore ++;
      displayScore();
    }else{
      console.log("You win!")
      humanScore++;
      displayScore();
    }
  }
}
for (let i = 0; i < 5; i++){
  playRound();
}