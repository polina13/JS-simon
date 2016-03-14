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
