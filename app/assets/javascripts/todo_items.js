$(document).ready(function() {

  $('body').bind("ajax:success", function(e,data) {
  	$('.todo_items-<%=destination_id%>').append(data);

});


});


