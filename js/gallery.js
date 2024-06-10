document.addEventListener("DOMContentLoaded", function() {

    const lightbox = document.getElementById('lightbox');

    const lightboxImg = document.getElementById('lightbox-img');

    const closeBtn = document.getElementById('close-btn');

    const galleryImages = document.querySelectorAll('.dream img');

 

    galleryImages.forEach(image => {

        image.addEventListener('click', () => {

            lightboxImg.src = image.src;

            lightbox.classList.add('show'); // Add 'show' class to display lightbox

        });

    });

 

    closeBtn.addEventListener('click', () => {

        lightbox.classList.remove('show'); // Remove 'show' class to hide lightbox

    });

});