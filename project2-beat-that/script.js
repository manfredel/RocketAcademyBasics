//global varables
var diceRollState = "roll dice";
var diceChoiceState = "dice Choice";
var winSelection = "win Selection";
var gameMode = diceRollState;
var diceP11 = 0;
var diceP12 = 0;
var diceP21 = 0;
var diceP22 = 0;
var myOutputValue = 0;
var p1Choice = "";
var p2Choice = "";
var player = 1;
var p1Score = [];
var p2Score = [];
var winnerBoard = [0, 0];

//Generating randomised dice number
var rollDice = function () {
  var diceNumber = Math.ceil(Math.random() * 6);
  return diceNumber;
};

//combination of dice based on players' preferrence
var diceChoicePlayer = function (select) {
  if (player == 1) {
    if (select == 1) {
      return `${diceP11}${diceP12}`;
    }
    if (select == 2) {
      return `${diceP12}${diceP11}`;
    }
  }
  if (player == 2) {
    if (select == 1) {
      return `${diceP21}${diceP22}`;
    }
    if (select == 2) {
      return `${diceP22}${diceP21}`;
    }
  }
};

//Game logic function to compare 2 players dice rolls and selection against each other
var gameLogic = function (input) {
  if (player == 1) {
    if (gameMode == diceRollState) {
      diceP11 = rollDice();
      diceP12 = rollDice();
      gameMode = diceChoiceState;
      return `Welcome Player ${player}. </br> You rolled ${diceP11} for Dice 1 and ${diceP12} for Dice 2. </br></br>Choose the order of the dice by inputing "1" or "2".`;
    }
    if (gameMode == diceChoiceState) {
      var checker = inputCheck(input);
      if (!checker) {
        return `Error input. Please select "1" or "2" for dice order. </br></br> You rolled ${diceP11} for Dice 1 and ${diceP12} for Dice 2`;
      } else {
        p1Choice = diceChoicePlayer(input);
        player = 2;
        gameMode = diceRollState;
        return `Player 1, you chose dice ${input} first.
        </br>Your number is ${p1Choice}.
        </br></br>It is now Player 2's turn. 
        </br>Press Submit to generate your number`;
      }
    }
  }
  if (player == 2) {
    if (gameMode == diceRollState) {
      diceP21 = rollDice();
      diceP22 = rollDice();
      gameMode = diceChoiceState;
      return `Welcome Player 2. </br> You rolled ${diceP21} for Dice 1 and ${diceP22} for Dice 2. </br></br>Choose the order of the dice by inputing "1" or "2"..`;
    }
    if (gameMode == diceChoiceState) {
      var checker = inputCheck(input);
      if (!checker) {
        return `Error input. Please select "1" or "2" for dice order. </br></br> You rolled ${diceP21} for Dice 1 and ${diceP22} for Dice 2`;
      } else {
        p2Choice = diceChoicePlayer(input);
        gameMode = winSelection;
        return `Player 2, you chose dice ${input} first.
      </br></br>Your number is ${p2Choice}
      </br> Please submit to see who won!`;
      }
    }
  }
  if (gameMode == winSelection) {
    var playWin = winner();
    player = 1;
    gameMode = diceRollState;
    p1Score.push(p1Choice);
    p2Score.push(p2Choice);
    var p1Total = scoreCalculation(p1Score);
    var p2Total = scoreCalculation(p2Score);

    return ` Player 1 rolled ${p1Choice} and Player 2 rolled ${p2Choice},
  </br></br>${playWin}. Player 1 has ${p1Total} and ${winnerBoard[0]} wins and Player 2 has ${p2Total} and ${winnerBoard[1]} wins`;
  }
};

var scoreCalculation = function (score) {
  var sum = 0;
  for (let i = 0; i < score.length; i++) {
    sum += +score[i]; // '+' before the 'score[i]' converts element to interger
  }
  console.log(sum);
  return sum;
};

//validation of input if it is 1 or 2 only.
var inputCheck = function (input) {
  return input == 1 || input == 2;
};

//Determine who is the winner based players's dice selection
var winner = function () {
  if (p1Choice > p2Choice) {
    winnerBoard[0] += 1;
    return `Player 1 is the winner!`;
  }
  winnerBoard[1] += 1;
  return `Player 2 is the winner!`;
};

//Main function to call the functions to show on the website
var main = function (input) {
  var game = gameLogic(input);
  return game;
};
