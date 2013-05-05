// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function() {

$('body').bind('ajax:success', function(e, data) {
console.log(data);
var itemId = $('<div>').append(data).children().first().data("item-id");
$('.comments-' + itemId).append(data);
});



$('h4#commenti').click(function() {
	console.log("Clik");
	// $(this).next().find('#todoforms').slideToggle();
  $('div#displaycomments').slideToggle('slow', function() {
    // Animation complete.
  });
});

});


$('h3#addcomment').click(function() {
	console.log("Clik");
  $('.new-comment').slideToggle('slow', function() {
    // Animation complete.
  });
});