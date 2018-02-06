if("geolocation" in navigator){
  navigator.geolocation.getCurrentPosition(postion=>{
    $("#position").html(`Position ${position}`);
  });
} else {
  console.error("Geolocation is not available on this device.");
}
