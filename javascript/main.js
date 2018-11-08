$(document).ready(function() {

  	$('button').click(function() {
	    var newItem = $('#toDo').val();
	    $('ul').append("<li>" + newItem + "</li>");
	});

	$('ul').on('click','li', function(){
		$(this).css('text-decoration','line-through');
	});
});

