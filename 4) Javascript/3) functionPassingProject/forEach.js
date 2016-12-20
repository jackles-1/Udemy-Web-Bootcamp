// extra project to write a forEach from scratch

var colors = ["red", "orange", "yellow"];


// 
// function myForEach(array, func)
// {
// 	for(var i=0; i<array.length; i++)
// 	{
// 		func(array[i]);
// 	}
// }

// myForEach(colors, console.log);


Array.prototype.myForEach = function(func){
	for(var i=0; i<this.length; i++)
	{
		func(this[i]);
	}
}

colors.myForEach(console.log);