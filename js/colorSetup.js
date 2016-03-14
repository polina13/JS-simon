exports.colorSetup = function() {
  var randomNumber = Math.random() * 4;
  if (randomNumber < 1) {
    return "red";
  } else if (randomNumber <= 2) {
    return "blue";
  } else if (randomNumber <= 3) {
    return "yellow";
  } else {
    return "green";
  }
};
