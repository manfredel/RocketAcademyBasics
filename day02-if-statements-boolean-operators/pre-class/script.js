var orangeJuiceMain = function (input) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.

  var parameters = input.split(",");
  var numGuest = parameters[0];
  var glassPerGuest = parameters[1];

  var orangePerGlass = 4;
  var avgPerGuest = 2;
  var avgOrangePerGuest = orangePerGlass * avgPerGuest;

  var numOrange = orangePerGlass * glassPerGuest * numGuest;

  var myOutputValue = numOrange + " oranges needed";
  return myOutputValue;
};

var paintMain = function (input) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.
  var parameters = input.split(",");
  var totalRooms = parameters[0];
  var coat = parameters[1];
  var price = parameters[2];

  var totalRooms2 = 6;
  var roomArea = 3 * 3;
  var coat2 = 2;
  var paintCoverPerLitre = 300;

  var areaForPaint = totalRooms * roomArea * coat;
  var paintUsed = areaForPaint / paintCoverPerLitre;

  var cost = price * paintUsed;

  var myOutputValue = `$${cost} to paint ${totalRooms} rooms with ${coat} coat.`;

  return myOutputValue;
};

//RANDOM DICE ROLLS)
var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var randomDiceMain = function (input) {
  // Attempt the Random Dice Rolls exercise from the Intro to Logic and Control Flow module below with randomDiceMain as the main function.
  // Generate a random dice number
  var randomDiceNumber = rollDice();

  // Personalise the output
  var myOutputValue = `You just rolled a ${randomDiceNumber}.`;

  // Return and print output.
  return myOutputValue;
};

//Secret Phrase
var secretPhraseMain = function (input) {
  // Attempt the Secret Phrase exercise from the If, Else, Else If module below with secretPhraseMain as the main function.
  //Set a default value for myOutputValue
  var myOutputValue = "The door shall not open.";

  if (input == "palatable papaya") {
    myOutputValue = "you wrote the secret phrase!";
  } else if (input == "not so platable papaya") {
    myOutputValue += " but you are nearly there.";
  } else {
    myOutputValue += " nope, this is far from the right phase";
  }
  // return myOutputValue as output
  return myOutputValue;
};

//Dice Game
var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;
  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);
  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var diceGameMain = function (input) {
  // Attempt the Dice Game exercise from the If, Else, Else If module below with diceGameMain as the main function.
  // Generate a random dice number
  var randomDiceNumber = rollDice();
  // Default output value is 'you lose'.
  var myOutputValue = "you lose";
  // If input matches randomDiceNumber, update output.
  if (input == randomDiceNumber) {
    myOutputValue = "you win";
  }
  // Return output.
  return myOutputValue;
};

//Twice the Guess
var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;
  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);
  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var twiceGuessMain = function (input) {
  // Attempt the Twice the Guess exercise from the If, Else, Else If module below with twiceGuessMain as the main function.
  var randomDiceNumber = rollDice();
  // Default output value is 'you lose'.
  var myOutputValue = `you lose. Your guess is ${input} and dice is ${randomDiceNumber}.`;
  // If input matches randomDiceNumber, update output.
  if (input * 2 == randomDiceNumber) {
    myOutputValue = `you win. Your guess is ${input} and dice is ${randomDiceNumber}`;
  }
  // Return output.
  return myOutputValue;
};
