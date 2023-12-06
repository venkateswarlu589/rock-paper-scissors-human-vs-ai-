let playerWins = 0;
let computerWins = 0;

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function displayResults(winner) {
  body.innerHTML = "";
  const p = document.createElement('p');
  const display = document.createElement('div');
  p.textContent = `Winner is - ${winner}`;
  display.appendChild(p);
  const retry = document.createElement('button');
  retry.textContent = (winner == 'Player') ? 'Play Again' : 'Retry';
  retry.classList.add('button');
  display.appendChild(retry);
  display.classList.add('center');
  body.appendChild(display);
  retry.addEventListener('click', () => {location.reload()});
}

function getComputerChoice() {
  //It returns any of the computer 
  //choice such as rock paper or scissors
  const rock = "rock";
  const paper = "paper";
  const scissors = "scissors";
  const randomNumber = generateRandomNumber(1, 3);
  if (randomNumber == 1) {
    return rock;
  } else if (randomNumber == 2) {
    return paper;
  }
  return scissors;
}

function playRound(string) {
  // your code here!
  const playerSelection = string;
  const computerSelection = getComputerChoice();
  p.textContent = `Computer selected ${computerSelection}`;
  body.insertBefore(p, score);
  console.log(playerSelection + " " + computerSelection);
  if (playerSelection == computerSelection) {
    // return "Tie";
  }
  else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
           (playerSelection == 'scissors' && computerSelection == 'paper') ||
           (playerSelection == 'paper' && computerSelection == 'rock')) {
    playerWins++;
    pScore.textContent = playerWins;
    // return "Player Wins!!";
  } else {
    computerWins++;
    cScore.textContent = computerWins;
  }
  // return "Humanity lost to AI!!!!!";
  
  if (computerWins == 5 || playerWins == 5) {
    computerWins == 5 ? displayResults('Computer') : displayResults('Player');
  }
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');

rock.addEventListener('click', (() => {playRound('rock')}));
paper.addEventListener('click', (() => {playRound('paper')}));
scissor.addEventListener('click', (() => {playRound('scissors')}));
const p = document.createElement('p');
p.style.fontSize = '1.5rem';

const body = document.querySelector('body');
const score = document.querySelector('.score');
let pScore = document.querySelector('.player').getElementsByTagName('p')[1];
let cScore = document.querySelector('.computer').getElementsByTagName('p')[1];


//text fade in animation
var wrapper = document.getElementsByClassName("text-animation")[0];
wrapper.innerHTML = wrapper.textContent.replace(/./g, "<span>$&</span>");
var spans = wrapper.getElementsByTagName("span");
for (var i = 0; i < spans.length; i++) {
  spans[i].style.animationDelay = i*80 + "ms";
}