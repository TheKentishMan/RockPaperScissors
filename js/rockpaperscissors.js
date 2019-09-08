// Commenting to help me understand


// Global Variables
var playerScore;
var computerScore;

/*
    The functions for playerOne and Two will ultimate contain the ability to select either 
    human or computer but for the moment they are set to computer
*/

function  playerOne (){

    /*
        Call the function and assigned it as wanted to ensure that what's written to the screen and
        what's scored are the same
    */
    const playerOnePlayed = computerPlay()

    document.getElementById("playerOne").innerHTML = playerOnePlayed;

    return (playerOnePlayed)
}

function  playerTwo (){
    /*
        Call the function and assigned it as wanted to ensure that what's written to the screen and
        what's scored are the same
    */
    
    const playerTwoPlayed = computerPlay()
    
    document.getElementById("playerTwo").innerHTML = playerTwoPlayed;
    
    return (playerTwoPlayed)
}

function play(){
    

    whoWon (playerOne(), playerTwo() )
    
}

function whoWon(playerOne , playerTwo){

    /*
        need to rework the play round function into an if statement and then write the result to the 
        screen
    */

   document.getElementById("result").innerHTML = "";

    if (playerOne == 'rock' && playerTwo == 'scissor' || 
        playerOne == 'paper' && playerTwo == 'rock' ||
        playerOne == 'scissors' && playerTwo == 'paper') {

            document.getElementById("result").innerHTML = "player one wins";

        } else if (playerOne == playerTwo ) {

            document.getElementById("result").innerHTML = "draw";

        } else {

            document.getElementById("result").innerHTML = "player two wins";
        }
        

}

function computerPlay() {

    const options = ["rock", "paper", "scissors"]

    selection = Math.floor(Math.random() * 3);
    
    return (options[selection])
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

