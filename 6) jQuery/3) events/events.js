// demonstrates keypress function and "event" object
$("input").keypress(function(event){
	console.log(event);
	if(event.which === 13)
	{
		alert("You hit ENTER");
	}
});

// on() demonstrations
$("h1").on("click", function(){
	$(this).css("color", "purple");
});

// mouseenter and mouseleave can be replaced by CSS's hover
$("button").on("mouseenter", function(){
	$this.css("font-weight", "bold")
});

$("button").on("mouseleave", function(){
	$this.css("font-weight", "normal")
});