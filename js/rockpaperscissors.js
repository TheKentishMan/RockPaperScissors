const playerSelection = computerPlay()
const computerSelection = computerPlay()

// Global Variables
var playerScore;
var computerScore;
var rounds;


playRound(computerSelection, playerSelection)

function computerPlay() {
    // Randomly return rock, paper or scissors
    const options = ["rock", "paper", "scissors"]

    selection = Math.floor(Math.random() * 3);

    return (options[selection])
}

function playRound(computerSelection, playerSelection) {
    // Play a round of rock, paper or scissors
    console.log('Round Start');

    switch (playerSelection) {
        case 'rock':

            switch (computerSelection) {
                case 'rock':
                    console.log('%cA Draw%c, both players played rock' , 'color:blue' , 'color:grey')
                    break;

                case 'scissors':
                    console.log('Rock beats scissors: %cPlayer wins'  , 'color:blue')
                    score('player')
                    break;

                case 'paper':
                    console.log('Paper beats rock: %cPlayer loses', 'color:blue')
                    break;
            }

            break;

        case 'scissors':

            switch (computerSelection) {
                case 'rock':
                    console.log('Scissor beat rock:%c Player loses' , 'color:blue')
                    break;

                case 'scissors':
                    console.log('%cA Draw%c, both players played scissors' , 'color:blue' , 'color:grey')
                    break;

                case 'paper':
                    console.log('Scissors beat paper:%c Player wins' , 'color:blue')
                    score('player')
                    break;
            }

            break;

        case 'paper':

            switch (computerSelection) {
                case 'rock':
                    console.log('Paper beats rock:%c Player wins' , 'color:blue')
                    score('player')
                    break;

                case 'scissors':
                    console.log('Scissors beat paper:%c Player loses' , 'color:blue')
                    break;

                case 'paper':
                    console.log('%cA Draw%c, both players played paper', 'color:blue' , 'color:grey')
                    break;
            }


            break;


    }



}

function score(whoScored) {
    if(whoScored == 'computer'){
        computerScore += 1
        console.log('Computer: ' , computerScore)
    }

    if(whoScored == 'player'){
        playerScore += 1
        console.log('Player:' , playerScore)
    }

    return (playerScore , computerScore)
}

function setup() {
    // reset scores 
    playerScore = 0;
    computerScore = 0;

    // reset rounds 
    rounds = 0;
}

function game () {

    // add a input from the user here
    var round 

}