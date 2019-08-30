var userString = "";
var stringArray = [];
var vowelsTotal = 0;

var findNumberOfVowels = function(string) {

	stringArray = userString.toLowerCase().split("");

  console.log(stringArray);

  for (var i = 0; i < stringArray.length; i += 1) {
   	if (stringArray[i] === "a") {
      vowelsTotal += 1;
    } else if (stringArray[i] === "e") {
      vowelsTotal += 1;
    } else if (stringArray[i] === "i") {
      vowelsTotal += 1;
    } else if (stringArray[i] === "o") {
      vowelsTotal += 1;
    } else if (stringArray[i] === "u") {
      vowelsTotal += 1;
    } else if (stringArray[i] === "y") {
      vowelsTotal += 1;
    }
  }
}


$(document).ready(function(){
	$("form#enterSentence").submit(function(event){
  	event.preventDefault();
    vowelsTotal = 0;
    $("p#vowelCount").empty();

    userString = $("input#userSentence").val();
    findNumberOfVowels(userString);

    if (vowelsTotal === 0) {
      $("p#vowelCount").text("Your letter string contains no vowels.");
    } else {
   	$("p#vowelCount").text(vowelsTotal);
    }
  });
});
