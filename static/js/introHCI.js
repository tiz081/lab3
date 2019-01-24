'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		//$('.jumbotron h1').animate({opacity: 'toggle'}, 'slow');
		//var firstClick = $('.jumbotron h1')
		//if (firstClick.toggle == 1){
		//	$('.jumbotron h1').text("Goodbye Pretty Pictures");
		//} else {
		//	$('.jumbotron h1').text("Oh Hello Again");
		//}		
		$('.img').animate({opacity: 'toggle'}, 'slow');
		//$('.jumbotron h1').text("Tiffany Zhang");
		//$("#testjs").text("Please wait...");
		//$("#testjs").addClass("active");
		$("#testjs").toggleClass("active");
	});
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}

function projectClick(e){
	//prevent the page from reloading
	e.preventDefault();
	//In an event handler, $(this) refers to
	//the object that triggered the event
	$(this).css("background-color", "#7fff00");
	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");

	if (description.length==0){
		$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
	} else {
		//description.html("<p>Stop clicking on me! You just did at " + (new Date()) + "</p>");
		$(containingProject).toggle()
		//$(description).toggle()
	}
}
