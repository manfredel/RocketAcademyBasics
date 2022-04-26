var playRound = "Play";
var endRound = "end round";
var betRound = "bet round";
var choice = "choice round";
var gameMode = betRound;

var dealerHitThreshold = 16;
var playerHasChosenToStand = false;
var playerHand = [];
var compHand = [];
var playerCash = 100;
var bets = 0;
var tempBets = 0;

var makeDeck = function () {
  // create the empty deck at the beginning
  var deck = [];

  var suits = ["♥️", "♦️️", "♠️", "♣️"];

  for (var i = 0; i < suits.length; i++) {
    var currentSuit = suits[i];

    for (var counter = 1; counter <= 13; counter++) {
      var rankCounter = counter;
      var cardName = rankCounter;

      // 1, 11, 12 ,13
      // for BlackJack only, change the card rank for the face cards to 10.
      if (cardName == 1) {
        cardName = "A";
      } else if (cardName == 11) {
        rankCounter = 10;
        cardName = "J";
      } else if (cardName == 12) {
        rankCounter = 10;
        cardName = "Q";
      } else if (cardName == 13) {
        rankCounter = 10;
        cardName = "K";
      }

      // make a single card object variable
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter
      };

      // add the card to the deck
      deck.push(card);
    }
  }
  return deck;
};

var getRandomIndex = function (deck) {
  return Math.floor(Math.random() * deck);
};

var shuffleCards = function (cards) {
  for (var index = 0; index < cards.length; index++) {
    var randomIndex = getRandomIndex(cards.length);

    var currentItem = cards[index];

    var randomItem = cards[randomIndex];

    cards[index] = randomItem;
    cards[randomIndex] = currentItem;
  }

  return cards;
};

var deck = shuffleCards(makeDeck());

// Deal a card to the given hand
var cardToHand = function (hand) {
  hand.push(deck.pop());
};

// Get sum of cards in hand
var sumHand = function (hand) {
  var numAcesInHand = 0;
  var sum = 0;

  for (var counter = 0; counter < hand.length; counter++) {
    var currCard = hand[counter];
    // If card is Ace, value is 11 by default
    if (currCard.rank === 1) {
      numAcesInHand += 1;
      sum += 11;
    } else {
      sum += currCard.rank;
    }
  }
  // If sum is greater than sum limit and hand contains Aces, convert Aces from value of 11
  // to value of 1, until sum is less than or equal to sum limit or there are no more Aces.
  if (sum > 21 && numAcesInHand > 0) {
    for (var aceCounter = 0; aceCounter < numAcesInHand; aceCounter++) {
      sum -= 10;
      // If the sum is less than TWENTY_ONE before converting all Ace values from
      // 11 to 1, break out of the loop and return the current sum.
      if (sum <= 21) {
        break; // break keyword causes the loop to finish
      }
    }
  }
  return sum;
};

// Return whether the hand contains a Blackjack combination
var isBlackjack = function (hand) {
  return hand.length === 2 && sumHand(hand) === 21;
};

//checking if the bet value is within range
var checkBets = function (value) {
  return value <= playerCash && value > 0;
};

//Showing the cards in hand
var displayHands = function (playerHand, dealerHand) {
  var playerMessage = `Player hand:<br>`;
  for (var index = 0; index < playerHand.length; index++) {
    playerMessage =
      playerMessage +
      "○ " +
      playerHand[index].name +
      " of " +
      playerHand[index].suit +
      "<br>";
  }

  var dealerMessage = "Dealer hand:<br>";
  for (index = 0; index < dealerHand.length; index++) {
    dealerMessage =
      dealerMessage +
      "○ " +
      dealerHand[index].name +
      " of " +
      dealerHand[index].suit +
      "<br>";
  }

  return playerMessage + "<br>" + dealerMessage;
};

//Showing the values in hand
var displayValues = function (playerHandValue, dealerHandValue) {
  var totalHandValueMessage = `Player total hand value: 
    ${playerHandValue}.
    <br>Dealer total hand value: 
    ${dealerHandValue}`;
  return totalHandValueMessage;
};

//Main game output
var main = function (input) {
  var OutputValue = "";
  // If initial hands have not been dealt, deal initial hands
  if (gameMode == betRound) {
    if (!input) {
      return `Please place a bet from ${
        playerCash / playerCash
      } to ${playerCash}`;
    }
    var check = checkBets(input);
    if (!check) {
      return `Please place a bet within cash amount of $${playerCash}!`;
    }
    tempBets = input;
    gameMode = playRound;
  }

  if (gameMode == playRound) {
    // User clicks submit button to deal cards.
    // Deal first card for player then computer
    cardToHand(playerHand);
    cardToHand(compHand);

    // Deal second card for player then computer
    cardToHand(playerHand);
    cardToHand(compHand);
    // The cards are analyzed for any game winning conditions. (Blackjack)
    // If computer has Blackjack, computer auto wins because computer is dealer

    var playerBJSum = sumHand(playerHand);
    var compBJSum = sumHand(compHand);

    if (isBlackjack(compHand)) {
      bets = tempBets;
      playerCash -= +bets;
      OutputValue = `Computer has Blackjack and wins 💔 <br><br> ${displayHands(
        playerHand,
        compHand
      )} <br> ${displayValues(playerBJSum, compBJSum)}`;
      playerHand = [];
      compHand = [];
      gameMode = betRound;
      return `${OutputValue}. <br><br>
        Your bet is $${tempBets} and you now have 💵 $${playerCash} 💵. <br>Place a bet to play again.`;
    }

    // If player has Blackjack and computer does not, player wins
    if (isBlackjack(playerHand)) {
      bets = tempBets * 1.5;
      playerCash += +bets;
      OutputValue = `Player has Blackjack and wins 😍 <br><br> ${displayHands(
        playerHand,
        compHand
      )} <br> ${displayValues(playerBJSum, compBJSum)}`;
      playerHand = [];
      compHand = [];
      gameMode = betRound;
      return `${OutputValue}. <br><br>
        Your bet is $${tempBets} and you now have 💵 $${playerCash} 💵. <br>Place a bet to play again.`;
    }
    // The cards are displayed to the user.
    gameMode = endRound;
    return `${displayHands(playerHand, compHand)} <br><br>
      Please enter "hit" or "stand"`;
  }

  // Then begins a new action, where the user has to decide something: do they hit or stand.
  var compSum = sumHand(compHand);

  if (gameMode == endRound) {
    //If user input is neither "hit" nor "stand" prompt user
    if (input == "hit") {
      cardToHand(playerHand);

      //if (input === "stand") {
      //playerHasChosenToStand = true;

      // If bust, show player that she busts
      var playerSum = sumHand(playerHand);
      if (sumHand(playerHand) > 21) {
        bets = tempBets;
        playerCash -= +bets;
        OutputValue = `Player has busted and loses 💔 <br><br> ${displayHands(
          playerHand,
          compHand
        )} <br> ${displayValues(playerSum, compSum)}`;
        playerHand = [];
        compHand = [];
        gameMode = betRound;
        return `${OutputValue}. <br><br>
          Your bet is $${tempBets} and you now have 💵 $${playerCash} 💵. <br>Place a bet to play again.`;
      }
      // The computer also decides to hit or stand.
      // Computer hits if sum less than or equal to dealer hit threshold
      // Otherwise, computer stays

      if (compSum <= dealerHitThreshold) {
        cardToHand(compHand);
      }
      // Update computer hand sum after dealing new card
      compSum = sumHand(compHand);
      // If bust, show computer that she busts
      if (compSum > 21) {
        bets = tempBets;
        playerCash += +bets;
        OutputValue = `Computer has busted and loses 😍 <br><br>${displayHands(
          playerHand,
          compHand
        )} <br> ${displayValues(playerSum, compSum)}`;
        playerHand = [];
        compHand = [];
        gameMode = betRound;
        return `${OutputValue}. <br><br>
      Your bet is $${tempBets} and you now have 💵 $${playerCash} 💵. <br>Place a bet to play again.`;
      }
      return `${displayHands(playerHand, compHand)}<br><br>
      Please enter "hit" or "stand"`;
    }

    // If player and computer have both not busted and chosen to stand, decide who wins
    if (input == "stand") {
      if (compSum > dealerHitThreshold) {
        // If player hand sum is greater than computer hand sum, player wins!
        if (playerSum > compSum && playerSum <= 21) {
          bets = tempBets;
          playerCash += +bets;
          OutputValue = `Player wins! 😍 <br><br> ${displayHands(
            playerHand,
            compHand
          )} <br> ${displayValues(playerSum, compSum)}`;
          playerHand = [];
          compHand = [];
          gameMode = betRound;
          return `${OutputValue}. <br><br>
        Your bet is $${tempBets} and you now have 💵 $${playerCash} 💵. <br>Place a bet to play again.`;
        }
        if (playerSum == compSum && playerSum <= 21) {
          bets = 0;
          playerCash += +bets;
          OutputValue = `Its a tie! <br><br> ${displayHands(
            playerHand,
            compHand
          )} <br> ${displayValues(playerSum, compSum)}`;
          playerHand = [];
          compHand = [];
          gameMode = betRound;
          return `${OutputValue}.  <br><br>
        Your bet is $${tempBets} and you now have 💵 $${playerCash} 💵. <br>Place a bet to play again.`;
        }

        if (playerSum < compSum && compSum <= 21) {
          bets = tempBets;
          playerCash -= +bets;
          OutputValue = `Computer wins! 💔 <br><br> ${displayHands(
            playerHand,
            compHand
          )} <br> ${displayValues(playerSum, compSum)}`;
          playerHand = [];
          compHand = [];
          gameMode = betRound;
          return `${OutputValue}. <br><br>
      Your bet is $${tempBets} and you now have 💵 $${playerCash} 💵. <br>Place a bet to play again.`;
        }
      }
    }
    if (input !== "hit" && input !== "stand") {
      return `Error input 🤷 <><br> ${displayHands(
        playerHand,
        compHand
      )} <br><br>
    Please enter "hit" or "stand"`;
    }
  }
};
