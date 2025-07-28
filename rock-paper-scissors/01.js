let humanScore = 0;
let computerScore = 0;
const rockButton = document.querySelector('.js-rock-button');
const scissorsButton = document.querySelector('.js-scissors-button');
const paperButton = document.querySelector('.js-paper-button');
const result = document.querySelector('.js-results')


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

function displayScore(){
  result.innerHTML = `Score => You: ${humanScore}, Computer: ${computerScore}`;
}

function playRound(computerChoice, humanChoice){
  computerChoice = getComputerChoice();
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === 'rock'){
    if(computerChoice === 'Rock'){
      result.innerHTML = "It's a tie!";
    }else if(computerChoice === 'Paper'){
      result.innerHTML = "You lose!";
      computerScore ++;
    }else{
      result.innerHTML = "You win!";
      humanScore++;
    }
  }
  if (humanChoice === 'paper'){
    if(computerChoice === 'Paper'){
      result.innerHTML = "It's a tie!";
    }else if(computerChoice === 'Scissors'){
      result.innerHTML = "You lose!";
      computerScore ++;
    }else{
      result.innerHTML = "You win!";
      humanScore++;
    }
  }
  if (humanChoice === 'scissors'){
    if(computerChoice === 'Scissors'){
      result.innerHTML = "It's a tie!";
    }else if(computerChoice === 'Rock'){
      result.innerHTML = "You lose!";
      computerScore ++;
    }else{
      result.innerHTML = "You win!";
      humanScore++;
    }
  }
}

rockButton.addEventListener('click', (computerChoice, humanChoice) => {
  humanChoice = 'Rock';
  playRound(computerChoice, 'Rock');
  displayScore();
})
scissorsButton.addEventListener('click', (computerChoice, humanChoice) => {
  humanChoice = 'Scissors';
  playRound(computerChoice, 'Scissors');
  displayScore();
})
paperButton.addEventListener('click', (computerChoice, humanChoice) => {
  humanChoice = 'Paper';
  playRound(computerChoice, 'Paper');
  displayScore();
})