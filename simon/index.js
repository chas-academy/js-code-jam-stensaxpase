let userChoice = document.querySelector('.input');
console.log(userChoice);
let play = document.querySelector('.btn');
let choiceOutput = document.querySelector('.userOutput');
let computerOutput = document.querySelector('.compOutput');
let reload = document.querySelector('.reload');
let winner = document.querySelector('.winner')


userChoice.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {

    event.preventDefault();

    play.click();
  }
});


const getUserChoice = (userChoice) => {
    userChoice = userChoice.toLowerCase();   
}


const getComputerChoice = () => {
    const num = Math.floor(Math.random() * 3);
    switch (num) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };

  computerChoice = getComputerChoice();

  console.log(computerChoice);
  

  const getWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'it\'s oficially a tie!';
    }
  
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Sorry, you lost.';
      } else {
        return 'Congratulations, you won!';
      }
    }
  
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
          return 'Sorry. Better luck next time.';
        } else {
          return 'Congratulations, you won!';
        }
      }
  
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Sorry, computer won.';
      } else {
        return 'Congratulations, you won!';
      }
    }
  
    if (userChoice === 'bomb') {
      return 'Congratulations, You won!'
    }
  };
   

play.addEventListener('click', () => {
    userChoice = userChoice.value;
    console.log(userChoice);

    if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors' || userChoice === 'bomb') {
        choiceOutput.innerHTML = userChoice;
    } else {
        choiceOutput.innerHTML = 'Invalid Choice';
    }

    if (choiceOutput.innerHTML !== 'Invalid Choice') {

      computerOutput.innerHTML = computerChoice;

      winner.innerHTML = getWinner(userChoice, computerChoice);

      reload.style.display = "block";
      play.style.display = "none";
    } else {
      winner.innerHTML = "Try again"

      reload.style.display = "block";
      play.style.display = "none";

     
    }
});

reload.addEventListener('click', () => {
    window.location.reload();
})

