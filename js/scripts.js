$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var myName = $("input#name").val();
    var food = $("#food").val();
    var music = $("input:radio[name=music]:checked").val();
    var dob = $("#born").val();
    var myFavColor = $("#color").val();
    console.log(color);

    $(".name").text(myName);
    $(".born").text(dob);
    $(".music").text(music);
    $(".food").text(food);
    $(".color").css("color", myFavColor);
    $(".colorHex").text(myFavColor);

    $("#submittedSurvey").show();

  });
});
