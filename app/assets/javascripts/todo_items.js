


$(document).ready(function() {

  $('body').bind('ajax:success', function(e,data) {
  	var x = $('<div>').append(data).children().first().data("comment-id");
  	$('.todo_items-' + x).append(data);

});

$('h3#createtodo').click(function() {
	console.log("Clik");
	// $(this).next().find('#todoforms').slideToggle();
  $('.new_todo_item').slideToggle('slow', function() {
    // Animation complete.
  });
});

});