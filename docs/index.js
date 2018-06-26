var map;
function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 19
        });
}
$(document).ready(()=>{
  initMap();
});

if("geolocation" in navigator){

  var showLocation = (pos)=>{
    var latitude = pos.coords.latitude;
    var longitude = pos.coords.longitude;
    map.setCenter({
      lat:latitude, lng:longitude
    });

    
    
    var circle = new google.maps.Circle({
      strokeColor:'#FFFFFF',
      strokeOpacity:0.8,
      strokeWeight:2,
      fillColor:'yellow',
      fillOpacity: 1,
      map:map,
      center:{lat:latitude, lng:longitude},
      radius: 5
    });
    var coo = pos.coords;
    $("#position").html(`
      Position<br><br>
      Latitude: ${coo.latitude}<br>
      Longitude: ${coo.longitude}<br>
      Accuracy: ${coo.accuracy}<br><br>
      <a href="http://www.openstreetmap.org/?lat=${coo.latitude}&lon=${coo.longitude}&zoom=17&layers=M">Open Map</a>
     `);
 
      var lt = coo.latitude;
      var lo = coo.longitude;
      var ltlo = `${lt}, ${lo}`;


    $.ajax({
      type:'GET',
      url:'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAYroruKZVazhbGP5_uENqqQ2tdPWFyRWs',
      data: {
      latlng: ltlo
      },
      success: (result)=>{
        console.log(result);
        var ad = result['results'][0]['formatted_address'];
        $("#address").html(ad);
      }
      }).fail(()=>{
      console.error('app error');
      });
  };

  var errorLocation = (err)=>{
    $("#address").html(err);
  };

  var opts = {
    timeout:60000
  };

  navigator.geolocation.watchPosition(showLocation,errorLocation,opts);
}
