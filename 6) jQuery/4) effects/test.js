// fadeOut example
$("button").on("click", function(){
	// having the remove inside fadeOut as a function, make sure that it they aren't removed until AFTER the fadeout is finished
	$("div").fadeOut(1000, function(){

		// without this remove, the divs' display will be set to "none", but they will still exist
		// $(this).remove();
	});
});

// fadeIn, fadeToggle, slideDown, slideUp, and slideToggle work the same way

