
// demonstrates keypress function and "event" object
$("input").keypress(function(event){
	console.log(event);
	if(event.which === 13)
	{
		alert("You hit ENTER");
	}
});
