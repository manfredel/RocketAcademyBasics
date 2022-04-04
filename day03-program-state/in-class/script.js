var rollNum = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var wordNumber = randomInteger + 1;

  return wordNumber;
};

var rollWord = function () {
  var num = rollNum();

  if (num == 1) {
    num = "banana";
  }
  if (num == 2) {
    num = "chisel";
  }
  if (num == 3) {
    num = "faucet";
  }
  return num;
};

var correctGuess = 0;

var secretWordBaseMain = function (input) {
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  var secretWord = rollWord();

  var myOutputValue = `The secret word is ${secretWord} and your guess is ${input}. <br>You have ${correctGuess}`;

  if (
    (secretWord == "banana" && input == "banana") ||
    (secretWord == "chisel" && input == "chisel") ||
    (secretWord == "faucet" && input == "faucet")
  ) {
    correctGuess = correctGuess + 1;
    myOutputValue = `The secret word is ${secretWord} and your guess is ${input}. <br>You have ${correctGuess}`;
  }

  if (correctGuess == 2) {
    myOutputValue = `The secret word is ${secretWord} and your guess is ${input}. <br>You have ${correctGuess}. <br> You Win!`;
    correctGuess = 0;
  }

  return myOutputValue;
};

var secretWordTwiceRowMain = function (input) {
  // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordXRowMain = function (input) {
  // Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceWithinMain = function (input) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceWithin2DiceMain = function (input) {
  // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var dice4DMain = function (input) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
