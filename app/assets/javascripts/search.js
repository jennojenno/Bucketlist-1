$(document).ready(function() {

  $('body').on('change', '#search', function () {
    var _this = this;
    var results = _.filter(items, function(item) {
     var searchTerm = $(this).val()
     var matchTerm = new RegExp(searchTerm);
     return item.name.match(matchTerm);
     });


     $('.items').html('')  
     _.each(results, function(item) {
       var html = "<p>" + item.name;    
     $('.items').append(html); 
     });
  }); 

});