document.addEventListener("DOMContentLoaded", function() {
    var directionsText = document.querySelector(".direction-text");
    var mapContainer = document.querySelector(".map-container");
    
    directionsText.addEventListener("click", function() {
        mapContainer.scrollIntoView({ behavior: 'smooth' });
    });
});
