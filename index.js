


$("h1").css("color", "blue");



$("button").click(function() {
  $('h1').css('color', 'purple');


  var smoking = $('#smoking').val();
var seatbelt = $('#seatbelt').val();
var health = $('#health').val();

  var overallScore = 100;

  if (smoking == 'smokingCurrent') {
    overallScore = overallScore - 10;
  } else if (smoking == 'smokingFormer10') {
    overallScore = overallScore - 5;
  }

  if (seatbelt == 'seatbeltNo') {
    overallScore = overallScore - 1;
  }

  if (health == 'healthFair') {
    overallScore = overallScore - 1;
  } else if (health == 'healthPoor') {
    overallScore = overallScore - 2;
  }


 $('h2').text('your score is ' + overallScore);
});
