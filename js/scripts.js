var userString = "";
var pigLatinString = "";
var pigLatinMap = [];
var pigLatinTest = [];
var pigLatinTest2 = [];
var pigLatinTestString = "";



var pigLatin = function(string) {
	var stringArray = string.split(" ");
	pigLatinMap = stringArray.map(function(element){
		for (var i = 0; i < stringArray.length; i += 1 ) {
			if (element === "I") {
				return "Iay"
			} else if (element === "i") {
				return "Iay";
			}	else if (element === "A") {
				 return "A-way";
			} else if (element === "a") {
				return "a-way";
			} else if (element[0] === "a") {
				return element + "way";
			} else if (element[0] === "e") {
				return element + "way";
			} else if (element[0] === "i") {
				return element + "way";
			} else if (element[0] === "o") {
				return element + "way";
			} else if (element[0] === "u") {
				return element + "way";
			} else if (element[0] === "y") {
				return element.slice(1) + "yway";
			} else if (element[0] === "b") {
				return element.slice(1) + "bay";
			} else if (element[0] === "c") {
				return element.slice(1) + "cay";
			} else if (element[0] === "d") {
				return element.slice(1) + "day";
			} else if (element[0] === "f") {
				return element.slice(1) + "fay";
			} else if (element[0] === "g") {
				return element.slice(1) + "gay";
			} else if (element[0] === "h") {
				return element.slice(1) + "hay";
			} else if (element[0] === "j") {
				return element.slice(1) + "jay";
			} else if (element[0] === "k") {
				return element.slice(1) + "kay";
			} else if (element[0] === "l") {
				return element.slice(1) + "lay";
			} else if (element[0] === "m") {
				return element.slice(1) + "may";
			} else if (element[0] === "n") {
				return element.slice(1) + "nay";
			} else if (element[0] === "p") {
				return element.slice(1) + "pay";
			} else if (element[0] === "q") {
				return element.slice(2) + "quay";
			} else if (element[0] === "r") {
				return element.slice(1) + "ray";
			} else if (element[0] === "s") {
				return element.slice(1) + "say";
			} else if (element[0] === "t") {
				return element.slice(1) + "tay";
			} else if (element[0] === "v") {
				return element.slice(1) + "vay";
			} else if (element[0] === "w") {
				return element.slice(1) + "way";
			} else if (element[0] === "x") {
				return element.slice(1) + "xay";
			} else if (element[0] === "z") {
				return element.slice(1) + "zay";
			} else {
				return element;
			}
		}
	});
}

var pigLatinToString = function(){
	pigLatinString = pigLatinMap.join(" ");
}

var pigLatinDouble = function(string) {
	var stringArray = string.split(" ");
	pigLatinDoubleConsonants = stringArray.map(function(element){
		for (var i = 0; i < stringArray.length; i += 1 ) {
			if (element[0] === "b"){
				return element.slice(1).replace("ay", "bay");
			} else if (element[0] === "c"){
				return element.slice(1).replace("ay", "cay");
			} else if (element[0] === "d"){
				return element.slice(1).replace("ay", "day");
			} else if (element[0] === "f"){
				return element.slice(1).replace("ay", "fay");
			} else if (element[0] === "g"){
				return element.slice(1).replace("ay", "gay");
			} else if (element[0] === "h"){
				return element.slice(1).replace("ay", "hay");
			} else if (element[0] === "j"){
				return element.slice(1).replace("ay", "jay");
			} else if (element[0] === "k"){
				return element.slice(1).replace("ay", "kay");
			} else if (element[0] === "l"){
				return element.slice(1).replace("ay", "lay");
			} else if (element[0] === "m"){
				return element.slice(1).replace("ay", "may");
			} else if (element[0] === "n"){
				return element.slice(1).replace("ay", "nay");
			} else if (element[0] === "p"){
				return element.slice(1).replace("ay", "pay");
			} else if (element[0] === "r"){
				return element.slice(1).replace("ay", "ray");
			} else if (element[0] === "s"){
				return element.slice(1).replace("ay", "say");
			} else if (element[0] === "t"){
				return element.slice(1).replace("ay", "tay");
			} else if (element[0] === "v"){
				return element.slice(1).replace("ay", "vay");
			} else if (element[0] === "w"){
				return element.slice(1).replace("ay", "way");
			} else if (element[0] === "x"){
				return element.slice(1).replace("ay", "xay");
			} else {
				return element;
			}
		}
	});
}
var pigDoubleToString = function(){
	pigLatinDoubleString = pigLatinDoubleConsonants.join(" ");
}

$(document).ready(function(){
	$("form#enterSentence").submit(function(event){
  	event.preventDefault();

    userString = "";

    $("p#pigLatin").empty();

    userString = $("input#userSentence").val();

		pigLatin(userString);

		pigLatinToString();

		pigLatinDouble(pigLatinString);

		pigDoubleToString();

		$("p#pigLatin").text(pigLatinDoubleString);

  });

});
