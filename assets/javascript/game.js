
var computerChoices = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guessesLeft = 0;
var yourGuesses = [];

console.log("linked")

document.onkeyup = function(event){


    var userGuess = event.key;
    console.log(userGuess)
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


    if (userGuess === computerGuess){
        wins ++;
        guessesLeft = 9;
        yourGuesses = [];
    }

    if (userGuess != computerGuess){
        yourGuesses.push(userGuess)
        //how do I push number of guesses down?
    }

    if (guessesLeft === 0){
        losses ++;
    }



}

