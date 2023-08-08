 //User Choice 
const getUserChoice = userInput => 
{
userInput  = userInput.toLowerCase();
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
  return userInput;
} 
else{
  console.log (`Error: Please enter either rock, paper, or scissors.`);
}
};

//Computer Choice
const getComputerChoice = () => {
const randomNumber = Math.floor(Math.random() * 3);
switch (randomNumber){
  case 0:
    return 'rock'
  break;
   case 1:
    return 'paper'
  break;
   case 2:
    return 'scissors'
  break;
  default:
  console.log ('Error')
}
};

//Determine Winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return 'the game is a tie.';
  }
  if (userChoice === 'rock'){
    if (computerChoice ==='paper'){
      return 'Computer won the game';
    }else {
      return 'You won the game'
    }
  }
 if (userChoice === 'paper'){
    if (computerChoice ==='scissors'){
      return 'Computer won the game';
    }else {
      return 'You won the game'
    }
  }
   if (userChoice === 'scissors'){
    if (computerChoice ==='rock'){
      return 'Computer won the game';
    }else {
      return 'You won the game';
    }
  }

};

//Play the Game function
const playGame = () => {
  const userChoice = getUserChoice ('rock');
  if (!userChoice) {
    console.log('No user choice provided');
    return;
  }
  const computerChoice = getComputerChoice();

    console.log (`You chose ${userChoice}.`);
    console.log (`Computer chose ${computerChoice}.`);


    console.log (determineWinner(userChoice,computerChoice));
}

//Call playGame function
playGame();