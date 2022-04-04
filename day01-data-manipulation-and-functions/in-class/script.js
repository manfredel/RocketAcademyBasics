var fahrenheitToCelsiusMain = function (input) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  var fahrenheit = input;
  var celcius = ((fahrenheit - 32) * 5) / 9;
  return celcius;
};

var roadTripCostBaseMain = function (input) {
  // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.
  var lengthMile = input * 0.62;
  var cost = (lengthMile / 9) * 2.2;
  return cost;
};

var roadTripCostComfortableMain = function (input) {
  // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
  var lengthMile = input * 0.62;
  var costFerr = (lengthMile / 9) * 2.2;
  var costTrain = (lengthMile / 9) * 2;
  var costDiff = costFerr - costTrain;
  return costDiff;
};

var iceMachineMain = function (input) {
  // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.
  var icePerHourGrams = 5 * 453.492;
  var numGuest = input;
  var time = (numGuest * 2 * (4 * 1, 5)) / icePerHourGrams;
  return time;
};

var beerOrderMain = function (input) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  var customer = input;
  var halfBarrel = ((customer * 2) / 124) * (365 / 4);
  return halfBarrel;
};

var cellularDataMain = function (input) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  var data = Math.ceil(input / 50);
  var cost = data * 19.9;
  return cost;
};
