// Initialize and add the map
function initMap() {
    // The location of Cairo
    var yemen = {lat: 15.552727, lng: 48.5163882};
    // The map, centered at Cairo
    var map = new google.maps.Map(
        document.querySelector(".map"), {zoom: 4, center: yemen});
    // The marker, positioned at Cairo
    var marker = new google.maps.Marker({position: yemen, map: map});
  }
  
  
  // Smooth scrolling
  $("#navbar a, .btn").on("click", function(event) {
  
    if(this.hash !== "") {
      event.preventDefault();
  
      const hash = this.hash;
  
      $("html, body").animate({scrollTop: $(hash).offset().top - 100}, 800);
    }
  });
  
  
  // navbar Opacity
  
  window.addEventListener("scroll", function() {
    if(window.scrollY > 150) {
      document.querySelector("#navbar").style.opacity = 0.9;
    } else {
      document.querySelector("#navbar").style.opacity = 1;
    }
  });