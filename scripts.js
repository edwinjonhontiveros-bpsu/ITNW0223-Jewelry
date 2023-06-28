// slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementById("slideshow").getElementsByTagName("img");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000);
}


// change hero bg
function heroBack1() {
  document.getElementById("changeBack").style.backgroundImage = "url('media/bubble_bracelet.webp')";
  document.getElementById("changeBackFoot").style.backgroundImage = "url('media/bubble_bracelet.webp')";
}
function heroBack2() {
  document.getElementById("changeBack").style.backgroundImage = "url('media/heart_locket_2.webp')";
  document.getElementById("changeBackFoot").style.backgroundImage = "url('media/heart_locket_2.webp')";
}
function heroBack3() {
  document.getElementById("changeBack").style.backgroundImage = "url('media/cross_pendant_2.webp')";
  document.getElementById("changeBackFoot").style.backgroundImage = "url('media/cross_pendant_2.webp')";
}


// maps API
// code from https://stackoverflow.com/questions/51917104/google-maps-js-api-doesnt-load
function initMap() {
  var place = { lat: 14.562553241051393, lng: 120.59517338428523 };
  var map = new google.maps.Map(
    document.getElementById("mapView"), { zoom: 17.5, center: place }
  );
  var marker = new google.maps.Marker({ position: place, map: map });
}