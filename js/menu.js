$(document).ready(function() {
	$('.menu-toggle').click(function(event) {
		event.preventDefault();
		$('.nav-menu').slideToggle(200);
	});
});