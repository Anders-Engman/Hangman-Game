var LettersGuessed = "";
var RemainingGuess = 15;
var VictoryNumber = 0;
var RandomWord = ["bosch", "dali", "picasso", "miro", "kahlo", "ray", "kush", "breton", "duchamp", "chirico"];
var alphaPass = "ok";
var guessArray = [];
var revArray = [];

window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
    if (evt.keyCode == "32") {
    // Determines which key was pressed
        var userGuess = event.key;
            console.log(userGuess);

        // Used to choose the Name of the Surrealist from the RandomWord Array
        var ChosenWord = RandomWord[Math.floor(Math.random() * RandomWord.length)];
            console.log(ChosenWord);

        // used to translate chosen word to a numerical value, then translate that numerical value to underscores
        var transWord = Number(ChosenWord.length);
            console.log(transWord);

        // a 'while' loop that prints underscores in the same number as the characters of the target word, signifying letters yet to be guessed by the user
        var i = 0;
        var underscored = "";
            while (i < transWord) {
                underscored += " _ ";
                i ++;
            }
        document.getElementById("gameArea").innerHTML = underscored;
    
        // cuts up chosenword into an array of character strings
        var chars = ChosenWord.split('');
            console.log(chars);
        var splitArray = [chars];
            console.log(splitArray);
        
        for (i = 0; i < splitArray.length; i++) {
            if (userGuess != splitArray[i]) {
                i++;
                console.log("fucking work")
            } else if (userGuess == splitArray[i]) {
                console.log("solid shit, sir")
            }

        }
    }
}

// building the function by which the code scans to see if the chosenletter of the user is in the ChosenWord
document.onkeyup = function(event) {

    // determines which key was pressed
    var userGuess = event.key;

    // use keycodes 65 through 90
            var charCode = event.which || event.keyCode;
                if (charCode > 64 && charCode < 91) {
                    console.log("Alphabet!")
                    var alphaPass = true;
                } else {
                    (console.log("Not Alphabet!"))
                    var alphaPass = false;
                }

                    if (alphaPass = true) {
                        for (i = 0; i < guessArray.length; i++) {
                            if (guessArray.length == 0) {
                                console.log("include1");
                                guessArray.push(userGuess);
                                document.getElementById("LettersGuessed").innerHTML += userGuess + " ";
                            } else if ((userguess != guessarray[i]) && (i < guessarray.length)) {
                                i++;
                            } else if ((userguess != guessarray[i]) && (i >= guessarray.length)) {
                                console.log("include2");
                                guessArray.push(userGuess);
                                document.getElementById("LettersGuessed").innerHTML += userGuess + " "; }
                        }
                    } else if (alphaPass = false) {
                        console.log("exclude");
                    }
}

    
            // for (var i = 0; i < guessArray.length; i++) {
            // if (alphaPass == guessArray[0]) {
            //     console.log("exclude");
            // } else if ((alphaPass != guessArray[0]) || (guessArray.length == 0)) {
            //     console.log("include");
            //     guessArray.push(alphaPass);
            //     document.getElementById("LettersGuessed").innerHTML += alphaPass + " ";
            // } else {
            //     console.log("What the hell is going on?")



            // Next Objectives:
            // 1. Printing the User's guesses is functioning properly BUT
            //      1. Only Alphabetic Guesses should print
            //      2. No repeat guesses should print
            //
            // 2. ChosenWord needs to be used for when a user guesses a letter correctly
            //      1. relevant underscore must be replaced with the guessed letter
            //          1. Pseudo: break apart each name in array, (i.e Miro would be 1=M 2=I 3=R 4=O)
            //          2. correct user input replaces relevant underscore with the guessed letter, mapped by breaking answers apart
            //      2. remaining guesses must reduce by 1
            //
            // 3. Relevant Work of Art from Each artist should pop up in an alert when user guesses correctly
            //
            // 4. If user wins, add a "next round" button that adds 1 to the victory count but resets
            //      1. If user loses, provide reset button  
