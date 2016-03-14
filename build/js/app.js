(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var colorSetup = require('./colorSetup.js').colorSetup;
var flashColors = require('./flashColors.js').flashColors;

colorArray = [];
userArray = [];
$(document).ready(function(){
  $('#startButton').click(function(){
    var newColor = colorSetup();
    colorArray.push(newColor);
    var inputColorGreen = $('#inputColorGreen').val();
    var inputColorRed = $('#inputColorRed').val();
    var inputColorBlue = $('#inputColorBlue').val();
    var inputColorYellow = $('#inputColorYellow').val();
    // var simonResult = JournalEntry(inputEntry);

    $(".showColorArray").append(colorArray);
    console.log(colorArray);
    });

    $("#green").click(function(){

      userArray.push("green");
      var test1 = ""
      for(var i = 0; i < userArray.length; i++) {
        console.log(userArray);
        if (userArray[i] == colorArray[i]) {
          test1 =  "Keep going";
        } else {
          test1 =  "You Lose";
        }

        // return test1;
      }
      console.log(test1);
      $(".showColorArray").append(test1);

    })
  });

},{"./colorSetup.js":2,"./flashColors.js":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
exports.flashColors = function(inputColor) {
  $(".colorBtn").hide();
  $("#" + inputColor).show();
}

},{}]},{},[1]);
