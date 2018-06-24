if("geolocation" in navigator){
  navigator.geolocation.getCurrentPosition(pos=>{
    var coo = pos.coords;
    $("#position").html(`
      Position<br><br>
      Latitude: ${coo.latitude}<br>
      Longitude: ${coo.longitude}<br>
      Accuracy: ${coo.accuracy}<br><br>
      <a href="http://www.openstreetmap.org/?lat=${coo.latitude}&lon=${coo.longitude}&zoom=17&layers=M">Open Map</a>
     `);
  }, err=>{
    alert(err);
  });
} else {
  console.error("Geolocation is not available on this device.");
}
