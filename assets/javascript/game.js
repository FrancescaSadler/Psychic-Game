// potential guesses 
var computerChoices = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// score tracker 
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var yourGuesses = [];

//checking to make sure javascript it linked to text html 
console.log("linked")

//links back to HTML to stay updated with game 
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guessesLeft");
var yourGuessesText = document.getElementById("yourGuesses");

document.onkeyup = function(event){

// records user guess- lowercase only 
    var userGuess = event.key.toLowerCase();
    yourGuesses.push(userGuess)
    console.log(userGuess)
    // records computer guess 
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    


    if (userGuess === computerGuess) {
        wins ++;
        guessesLeft = 9;
        yourGuesses = [];
    }

     if (userGuess != computerGuess) {
        yourGuesses.push(userGuess)
        //how do I push number of guesses down?
        guessesLeft = guessesLeft -1;
    }


    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesLeftText.textContent = guessesLeft;
    yourGuessesText.textContent = yourGuesses;

    if (guessesLeft === 0){
        losses ++;
    
    }



}

