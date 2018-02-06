if("geolocation" in navigator){
  navigator.geolocation.getCurrentPosition(postion=>{
    var coords = position.coords;
    $("#position").html(`
      Position<br><br>
      Latitude: ${coords.latitude}<br>
      Longitude: ${coords.longitude}<br>
      Accuracy: ${coords.accuracy}<br><br>
      <a href="http://www.openstreetmap.org/?lat=${coords.latitude}&lon=${coords.longitude}&zoom=17&layers=M">Open Map</a>
     `);
  }, err=>{
    alert(err);
  });
} else {
  console.error("Geolocation is not available on this device.");
}
