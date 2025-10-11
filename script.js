console.log("hello world");


// Getting Computer Choice
function getComputerChoice() 
{
    let num = Math.floor(Math.random() * 3);
    if (num === 0) return "rock";
    else if (num === 1) return "paper";
    else return "scissors";
}


// Getting Human Choice

function getHumanChoice() 
{
    let value = prompt("Rock, Paper or Scissors?");
    if(!value) return getHumanChoice();
    value = value.toLowerCase();
    if(value === "rock" || value === "paper" || value === "scissors") 
    {
        return value;
    } 
    else 
    {
        return getHumanChoice();
    }
}

// Playing the Game
function playGame()
{

    let humanScore = 0, computerScore = 0;

    // Playing the Round
    function playRound(humanChoice, computerChoice) 
    {
        if(humanChoice === computerChoice) 
        {
            console.log(`Tie! Both chose ${humanChoice}`);
        } 
        else if((computerChoice === "rock" && humanChoice === "scissors") ||
                (computerChoice === "paper" && humanChoice === "rock") ||
                (computerChoice === "scissors" && humanChoice === "paper"))
        {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
        else
        {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        }  

        console.log(`You: ${humanScore} and Computer: ${computerScore}`);
    }


    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());


    // Results
    if(humanScore > computerScore)
    {
        console.log("Congrats! You won the game");
    }
    else if(humanScore < computerScore)
    {
        console.log("Sorry! You lost the game");
    }
    else
    {
        console.log("It's a tie");
    }
}

