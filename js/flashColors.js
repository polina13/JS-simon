exports.flashColors = function(inputColor) {
  $(".colorBtn").hide();
  $("#" + inputColor).show();
}
