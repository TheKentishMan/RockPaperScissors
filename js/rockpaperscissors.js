const playerSelection = 'rock'
const computerSelection = computerPlay()
const options = ["rock" , "paper" , "scissors"]


playRound(playerSelection, computerSelection)

function computerPlay () {
    // Randomly return rock, paper or scissors
    
    

    // Make a selection from the available options
    selection = Math.floor(Math.random() * 3);
        
    return(options[selection])
}

function playRound (computerSelection , playerSelection) {
    // Play a round of rock, paper or scissors
    console.log('Round Start')
    console.log(playerSelection , computerSelection) 
    playerSelection.toLowerCase

    if( )

}

function game() {

}