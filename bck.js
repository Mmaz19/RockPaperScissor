//Computer random play
function computerPlay(){
    const arr = ['rock','paper','scissors'];
    return arr[Math.floor(Math.random()*arr.length)];
}

//single round
function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);
    let result = "";
   if( (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')){
            result = (`You win! ${playerSelection} beats ${computerSelection} `)
            playerScore++;
        } else if (playerSelection === computerSelection){
            result = (`Tie!`)
        }else {
            result = (`You lost! ${computerSelection} beats  ${playerSelection}`)
            computerScore++;
        }
        console.log(result);
        return 
  }

  function game(){
      
      for( let i = 0; i<5; i++){
        let playerSelection = prompt('Choose Wisely').toLowerCase();
        let computerSelection = computerPlay();
        playRound(playerSelection,computerSelection);
        console.log(playerScore, computerScore);
      }
      if (computerScore > playerScore){
          return console.log(`You Lost! Computer: ${computerScore} Player:${playerScore}`)
      }else if (playerScore > computerScore){
        return console.log(`You Win!  Player:${playerScore} Computer: ${computerScore}`)
    }else{
        return console.log(`Tie!  Player:${playerScore} Computer: ${computerScore}`)
    }
      
  }

  //counter
  let body = document.querySelector('body');
  let playerScore = 0;
  let computerScore = 0;
  game();
  