// create array of random numbers to be used in rgb colors
var numbers = [];

for(var i = 0; i < 18; i++){
	numbers[i] = Math.floor((Math.random()*255));
}

// select winning color and display rgb values
var winningColor = Math.floor((Math.random()*5));
var winningRGB = "rgb(" + numbers[winningColor*3] + ", " + numbers[(winningColor*3)+1] + ", " + numbers[(winningColor*3)+2] + ")";

var winningDisplay = document.querySelector("#winner");

winningDisplay.textContent = winningRGB.substr(3);

// create array of rgb colors for squares, using values in numbers
var colors = [];

for(var i = 0; i < 6; i++){
	colors[i] = "rgb(" + numbers[i*3] + ", " + numbers[(i*3)+1] + ", " + numbers[(i*3)+2] + ")";
}

//assign colors in colors to the squares
var squares = document.querySelectorAll(".square");

for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];

	//add click listeners for squares to compare the square's color to winningRGB
	squares[i].addEventListener("click", function(){
	//grab color of clicked square
	var clickedColor = this.style.background;
	//^^^FIX BROSWER COMPABABILITY: https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle

	if(clickedColor === winningRGB){

		console.log("correct");
	}
	else{
		console.log("wrong");
	}
});
}




