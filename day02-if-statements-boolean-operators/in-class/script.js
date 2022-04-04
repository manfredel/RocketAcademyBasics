/* Lucky 11 */
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

var lucky11Main = function (input) {
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.

  var myOutputValue = "hi";
  var roll1 = rollDice();
  var roll2 = rollDice();
  var doubleRoll = roll1 + roll2;

  // add 2 roll dice to get a total number
  if (input == roll1 || input == roll2 || doubleRoll == 11) {
    myOutputValue = "You Win!";
  } else {
    myOutputValue = "You Lose!";
  }

  return myOutputValue;
};

/* Hawker Food Categorisation */
var hawkerFoodCategorisationMain = function (input) {
  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
  var myOutputValue = "hello world";

  if (input == "Chicken Rice" || input == "Nasi Lemak") {
    myOutputValue = "Rice";
  } else if (input == "Hokkien Mee") {
    myOutputValue = "Noodles";
  } else {
    myOutputValue = "Other";
  }

  return myOutputValue;
};

/* 4D with Single Digit Comparison */
var num = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 9;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var num4D = randomInteger + 1;

  return num4D;
};

var fourDSingleDigitMain = function (input) {
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.
  var myOutputValue = "hello world";
  var d1 = num();
  var d2 = num();
  var d3 = num();
  var d4 = num();

  if (input == d1 || input == d2 || input == d3 || input == d4) {
    myOutputValue = `You win! Your guess is ${input}, the 4D numbers are ${d1}, ${d2}, ${d3}, ${d4}.`;
  } else {
    myOutputValue = `You lose! Your guess is ${input}, the 4D numbers are ${d1}, ${d2}, ${d3}, ${d4}.`;
  }
  return myOutputValue;
};

/* Hawker Food Randomness */
var foodRoll = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var foodNum = randomInteger + 1;

  return foodNum;
};

var randomFood = function () {
  var foodChoice = 0;
  var randomFood = foodRoll();

  if (randomFood == 1) {
    foodChoice = "chicken rice";
  } else if (randomFood == 2) {
    foodChoice = "roti prata";
  } else if (randomFood == 3) {
    foodChoice = "hokkien mee";
  } else if (randomFood == 4) {
    foodChoice = "nasi lemak";
  } else if (randomFood == 5) {
    foodChoice = "bak kut teh";
  } else {
    foodChoice = "laksa";
  }

  return foodChoice;
};

var hawkerFoodRandomnessMain = function (input) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  var myOutputValue = 0;
  var foodType = randomFood();

  if (input == foodType) {
    myOutputValue = "Correct! You get a free meal!";
  } else {
    myOutputValue = "Please try again!";
  }

  return myOutputValue;
}; //Not sure what the question is asking about

/* More comfortable: 4D with Winning Range */ var get4DNum = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 1000;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var num4D = randomInteger + 1;

  return num4D;
};

var winning = function (guess, winNum, range) {
  if (guess > winNum - range || guess < winNum + range) {
    return false;
  }
  return true;
};

var fourDSingleDigitMain = function (input) {
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.
  var myOutputValue = "hello world";
  var d1 = num();
  var d2 = num();
  var d3 = num();
  var d4 = num();

  if (input == d1 || input == d2 || input == d3 || input == d4) {
    myOutputValue = `You win! Your guess is ${input}, the 4D numbers are ${d1}, ${d2}, ${d3}, ${d4}.`;
  } else {
    myOutputValue = `You lose! Your guess is ${input}, the 4D numbers are ${d1}, ${d2}, ${d3}, ${d4}.`;
  }
  return myOutputValue;
};

/* More comfortable: Hawker Food Omaskase */
var FoodRoll = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal2 = Math.random() * 4;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger2 = Math.floor(randomDecimal2);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var foodNum2 = randomInteger2 + 1;

  return foodNum2;
};

var chickRice = "chicken rice";
var nasiLemak = "nasi lemak";
var bKT = "bak kut teh";
var prata = "roti prata";
var hokkienMee = "hokkien mee";
var laksa = "laksa";
var beefHorFun = "beef hor fun";

var riceType = function () {
  var riceNum = FoodRoll();
  var riceFood = 0;

  if (riceNum == 1) {
    riceFood = chickRice;
  } else if (riceNum == 2) {
    riceFood = nasiLemak;
  } else if (riceNum == 3) {
    riceFood = bKT;
  } else {
    riceFood = prata;
  }
  return riceFood;
};

var noodleType = function () {
  var noodleNum = FoodRoll();
  var noodleFood = 0;

  if (noodleNum == 1) {
    noodleFood = hokkienMee;
  } else if (noodleNum == 2) {
    noodleFood = laksa;
  } else if (noodleNum == 3) {
    noodleFood = beefHorFun;
  } else {
    noodleFood = prata;
  }
  return noodleFood;
};

/*
var riceReRoll = function () {
  var riceT1 = riceType();
  var riceT2 = riceType();
  var riceT3 = 0;

  if (riceT1 == riceT2) {
    return (riceT2 = riceType());
  }
};

var noodleReRoll = function () {
  var noodleT1 = noodleType();
  var noodleT2 = noodleType();

  if (noodleT1 == noodleT2) {
    return (noodleT2 = noodleType());
  }
};
*/

var foodDecrip = function (dishName) {
  if (dishName == chickRice) {
    return "Best chicken rice in town";
  }
  if (dishName == nasiLemak) {
    return "next level nasi lemak";
  }
  if (dishName == bKT) {
    return "bak kut teh worthy for the King";
  }
  if (dishName == hokkienMee) {
    return "Sumptious noodles with the hint of prawn broth";
  }
  if (dishName == laksa) {
    return "Coconut with spice dunked with silky noodles";
  }
  if (dishName == beefHorFun) {
    return "Juicy tasty hor fun with tender beef slices";
  } else {
    return "Crispiest roti prata that you will not forget";
  }
};

var createMenu = function (dish1, dish2) {
  var dish1Desrip = foodDecrip(dish1);
  var dish2Desrip = foodDecrip(dish2);
  var menu = "</br> The first dish is";
  menu += ` ${dish1Desrip} and ${dish2Desrip}. `;
  if (
    dish1 == nasiLemak ||
    dish2 == nasiLemak ||
    dish1 == hokkienMee ||
    dish2 == hokkienMee ||
    dish1 == laksa ||
    dish2 == laksa
  ) {
    menu += "</br> Sambal will be included.";
  }
  return menu;
};

var riceDishOutput = function () {
  var riceDish1 = riceType();
  var riceDish2 = riceType();
  return createMenu(riceDish1, riceDish2);
};

var noodleDishOutput = function () {
  var noodleDish1 = noodleType();
  var noodleDish2 = noodleType();
  return createMenu(noodleDish1, noodleDish2);
};

var hawkerFoodOmakaseMain = function (input) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  if (input == "rice") {
    return "Rice based is chosen for you. " + riceDishOutput();
  }
  return "Noodle based is chosen for you. " + noodleDishOutput();
};
