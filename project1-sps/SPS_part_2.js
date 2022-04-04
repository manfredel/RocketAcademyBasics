//Computer to randomise the output
//User to input Scissors paper stone
//Match computer output against users input
//To identify Scissor > Paper, Paper > Stone, Stone > Scissor

//Set global variables
var scissors = "scissors";
var paper = "paper";
var stone = "stone";
var userWinCount = 0; //Number of user wins
var compWinCount = 0; //Number of computer wins
var drawCount = 0; // Number of draws
var gamePlayed = 0; //Games played
var winPercent = 0; //User winning percentage
var userName = ""; //User's name
var gameMode = ""; //Choice of game mode
var standard = "standard"; //standard game mode
var reversed = "reversed"; //reversed game mode

//Computer randomised selection of the choice
var compSelect = function () {
  var choice = [scissors, paper, stone];
  var ranChoice = choice[Math.floor(Math.random() * choice.length)];
  return ranChoice;
};

//Specify game rules based game mode and against computer and user input.
var criteria = function (compInput, userInput) {
  if (gameMode == standard) {
    if (
      (compInput == scissors && userInput == scissors) ||
      (compInput == paper && userInput == paper) ||
      (compInput == stone && userInput == stone)
    ) {
      drawCount += 1;
      gamePlayed += 1;
      winPercent = percent();
      return `Computer chose ${compInput}.<br> You chose ${userInput}. <br><br>It's a draw. <br><br>${userName}, you have won ${userWinCount}/${gamePlayed} turns with a winning percentage of ${winPercent}%. <br> Draw ${drawCount} times. <br> Computer won ${compWinCount}/${gamePlayed}.`;
    }
    if (
      (compInput == scissors && userInput == paper) ||
      (compInput == paper && userInput == stone) ||
      (compInput == stone && userInput == scissors)
    ) {
      compWinCount += 1;
      gamePlayed += 1;
      winPercent = percent();
      return `Computer chose ${compInput}.<br> You chose ${userInput}. <br><br>You lose! Bummer. <br><br>${userName}, you have won ${userWinCount}/${gamePlayed} turns with a winning percentage of ${winPercent}%. <br> Draw ${drawCount} times. <br> Computer won ${compWinCount}/${gamePlayed}.`;
    }
    if (
      (compInput == scissors && userInput == stone) ||
      (compInput == paper && userInput == scissors) ||
      (compInput == stone && userInput == paper)
    ) {
      userWinCount += 1;
      gamePlayed += 1;
      winPercent = percent();
      return `Computer chose ${compInput}.<br> You chose ${userInput}. <br><br>You win! Yay! <br><br>${userName}, you have won ${userWinCount}/${gamePlayed} turns with a winning percentage of ${winPercent}%. <br> Draw ${drawCount} times. <br> Computer won ${compWinCount}/${gamePlayed}.`;
    } else {
      return `Invalide choice. Please choose again.`;
    }

    return;
  }
  if (gameMode == reversed) {
    //reverse game rules
    if (
      (compInput == scissors && userInput == scissors) ||
      (compInput == paper && userInput == paper) ||
      (compInput == stone && userInput == stone)
    ) {
      drawCount += 1;
      gamePlayed += 1;
      winPercent = percent();
      return `Computer chose ${compInput}.<br> You chose ${userInput}. <br><br>It's a draw. <br><br>${userName}, you have won ${userWinCount}/${gamePlayed} turns with a winning percentage of ${winPercent}%. <br> Draw ${drawCount} times. <br> Computer won ${compWinCount}/${gamePlayed}.`;
    }
    if (
      (compInput == scissors && userInput == paper) ||
      (compInput == paper && userInput == stone) ||
      (compInput == stone && userInput == scissors)
    ) {
      userWinCount += 1;
      gamePlayed += 1;
      winPercent = percent();
      return `Computer chose ${compInput}.<br> You chose ${userInput}. <br><br>You win! Yay! <br><br>${userName}, you have won ${userWinCount}/${gamePlayed} turns with a winning percentage of ${winPercent}%. <br> Draw ${drawCount} times. <br> Computer won ${compWinCount}/${gamePlayed}.`;
    }
    if (
      (compInput == scissors && userInput == stone) ||
      (compInput == paper && userInput == scissors) ||
      (compInput == stone && userInput == paper)
    ) {
      compWinCount += 1;
      gamePlayed += 1;
      winPercent = percent();
      return `Computer chose ${compInput}.<br> You chose ${userInput}. <br><br>You lose! Bummer. <br><br>${userName}, you have won ${userWinCount}/${gamePlayed} turns with a winning percentage of ${winPercent}%. <br> Draw ${drawCount} times. <br> Computer won ${compWinCount}/${gamePlayed}.`;
    }
  }

  return;
};

//Calculate user winning percentage
var percent = function () {
  winPercent = ((userWinCount / gamePlayed) * 100).toFixed(2); //fixed on 2 decimal point
  return winPercent;
};

//Validate if the game mode input is correct
var modeValidate = function (userMode) {
  return userMode == standard || userMode == reversed;
};

//Validate if the selection input is correct
var selectionValidate = function (userSelection) {
  return (
    userSelection == scissors ||
    userSelection == paper ||
    userSelection == stone
  );
};

//Generating game results
var main = function (input) {
  //checking if username is inputed
  if (!userName) {
    if (!input) {
      return "Please insert username";
    }
    userName = input;
    return `Welcome ${userName}! Game On!<br><br> Choose a mode: "standard" or "reversed"`;
  }

  //checking if game mode is inputed
  if (!gameMode) {
    if (!input) {
      return 'Select game mode: "standard" or "reversed"';
    }
    var validate = modeValidate(input); //validate if game mode is spelled correctly
    if (!validate) {
      return 'Invalid mode. Select game mode: "standard" or "reversed" ';
    }
    gameMode = input; //Proceed if game mode are correct
    return "Choose scissors, paper or stone";
  }

  //Insert Scissors paper stone
  var userInput = input;

  //Validate if the spelling are correct
  var correctSelection = selectionValidate(userInput);
  if (!correctSelection) {
    return 'Invalid choice. Select: "scissors", "paper" or "stone"';
  }

  var compInput = compSelect();
  //Generating output
  var myOutputValue = criteria(compInput, userInput);

  return myOutputValue;
};
