$(document).ready(function() {
	
	$('#allStudentInfo .card').delay(1800).queue(function(next) {
		$(this).removeClass('hover');
		$('a.hover').removeClass('hover');
		next();
	});
});

