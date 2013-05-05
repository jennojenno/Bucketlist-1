var map; 
 
         function initMap() {
         var mapOptions = {
         center: new google.maps.LatLng(40.7736154, -73.9711057),
         zoom:12,
         mapTypeId: google.maps.MapTypeId.ROADMAP
         };
 
       map = new google.maps.Map($("#map-canvas")[0], mapOptions);
       }
 
      function addMarker(latitude, longitude, title) {
        var marker = new google.maps.Marker({
          position:new google.maps.LatLng(latitude, longitude), 
          map : map, 
          title : title
        });
      }