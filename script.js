let humanScore = 0, computerScore = 0;

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');


// Getting Computer Choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}


// Playing the Round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        document.querySelector('.results').textContent = `Tie! Both chose ${humanChoice}`;
    }
    else if ((computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")) {
        computerScore++;
        document.querySelector('.results').textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    else {
        humanScore++;
        document.querySelector('.results').textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    }

    document.getElementById('human').textContent = `You : ${humanScore}`;
    document.getElementById('computer').textContent = `Computer : ${computerScore}`;

    if(humanScore == 5 || computerScore == 5)
        {
            document.querySelector('.results').textContent = humanScore == 5 ? 'You won the game. Click on any button to play again.' : 'Computer won the game. Click on any button to play again.';
            

            humanScore = 0;
            computerScore = 0;
        }
}





// Getting choice from users

rockButton.addEventListener('click', function (e) {
    e.stopPropagation();
    playRound('rock', getComputerChoice());


})
paperButton.addEventListener('click', function (e) {
    e.stopPropagation();
    playRound('paper', getComputerChoice());


})
scissorsButton.addEventListener('click', function (e) {
    e.stopPropagation();
    playRound('scissors', getComputerChoice());


})









    
    









