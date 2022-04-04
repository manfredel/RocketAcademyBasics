var main = function (input) {
  var myOutputValue = "hello world";
  return myOutputValue;
};

var greetingMain = function (input) {
  // Attempt the Greeting Program exercise from the Our First Program module below with greetingMain as the main function.
  var myOutputValue = `Hello, ${input}! Wow, ${input} is a great name. Welcome!`;
  return myOutputValue;
};

var metricMain = function (input) {
  // Attempt the Metric Conversion Program exercise from the Our First Program module below with metricMain as the main function.
  var distanceInKm = input;
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

//Example Code
var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

var functionsExampleMain = function (input) {
  // Attempt the Base: Run Example Code exercise from the Functions I module below with functionsExampleMain as the main function.
  var myOutputValue = convertKmToMiles(input);
  return myOutputValue;
};

//Train Speed
var trainSpeedMain = function (input) {
  // Attempt the Comfortable: Train Speed exercise from the Functions I module below with trainSpeedMain as the main function.
  var train1Speed = 200;
  var timeToTokyo = 2;
  //Calculating the distance to Tokyo = Speed * Time
  var distanceToTokyo = train1Speed * timeToTokyo;

  var delay = input / 60;
  //Calcuate the time needed to travel after the delay
  var train2Time = timeToTokyo - delay;
  //Calculate the speed = distance / time.
  var train2Speed = distanceToTokyo / train2Time;

  var myOutputValue = train2Speed;
  return myOutputValue;
};

var clockMain = function (input) {
  // Attempt the More Comfortable: Clock exercise from the Functions I module below with clockMain as the main function.
  var minPerHour = 60;
  var totalHours = 12;
  var minToHour = Math.floor(input / minPerHour);
  var shortHand = 1 + minToHour;
  var longHand = input % minPerHour;

  var shortTotalAngle = 360 / totalHours;
  var longTotalAngle = 360 / minPerHour;

  var shortAngle = 360 - shortHand * shortTotalAngle;
  var longAngle = 360 - longHand * longTotalAngle;

  var angle = shortAngle - longAngle;

  var myOutputValue = angle;
  return myOutputValue;
};
