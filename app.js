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
            resultDiv.innerText = result;
            resultDiv.classList.remove('tie', 'loser');
            resultDiv.classList.add('winner');
            playerScore++;
        } else if (playerSelection === computerSelection){
            result = (`Tie!`)
            resultDiv.innerText = result;
            resultDiv.classList.remove('winner', 'loser');
            resultDiv.classList.add('tie');

        }else {
            result = (`You lost! ${computerSelection} beats  ${playerSelection}`)
            resultDiv.innerText = result;
            resultDiv.classList.remove('tie', 'winner');
            resultDiv.classList.add('loser');
            
            computerScore++;
        }
       
        console.log(result);
        return 
  }

  function game(playerSelection){
        let computerSelection = computerPlay();
        playRound(playerSelection,computerSelection);
        roundCount++;
        if (roundCount == 5){
        gameOver.style.display = 'block';
        if (computerScore > playerScore){
            return showFinal.innerText = `You Lost! Computer: ${computerScore} Player:${playerScore}`
        }else if (playerScore > computerScore){
          return showFinal.innerText = `You Win!  Player:${playerScore} Computer: ${computerScore}`
      }else{
          return showFinal.innerText = `Tie!  Player:${playerScore} Computer: ${computerScore}`
      }
        }else{
        
        counting.innerText = roundCount;
        scoreNum.innerText = playerScore;
        }
      
      
      
  }

  //counter
  let resultDiv = document.querySelector('.results');
  let body = document.querySelector('body');
  let playerScore = 0;
  let computerScore = 0;
  let playerSelection = document.addEventListener('click', function(e){
      return game(e.path[1].id);
  } );
  let counting = document.querySelector('.counterUp');
  let roundCount= 0;
  let gameOver = document.querySelector('.gameOver');
  let scoreNum = document.querySelector('.playerScoreNumber');
  let showFinal = document.querySelector('.showFinal');