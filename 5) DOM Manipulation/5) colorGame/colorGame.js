// create array of random numbers to be used in rgb colors
var numbers = [];

for(var i = 0; i < 17; i++){
	numbers[i] = Math.floor((Math.random()*255));
}

// select winning color and display rgb values
var winningColor = Math.floor((Math.random()*5));

var winningDisplay = document.querySelector("#winner");

winningDisplay.textContent = "(" + numbers[winningColor*3] + ", " + numbers[(winningColor*3)+1] + ", " + numbers[(winningColor*3)+2] + ")";

// create array of rgb colors for squares, using values in numbers
var colors = [];

for(var i = 0; i < 5; i++){
	colors[i] = "rgb(" + numbers[i*3] + ", " + numbers[(i*3)+1] + ", " + numbers[(i*3)+2] + ")";
}

var squares = document.querySelectorAll(".square");

for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
}


