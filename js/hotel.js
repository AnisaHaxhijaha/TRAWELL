document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    showSlide(currentSlide);

    function showSlide(index) {
        const slides = document.querySelectorAll('.slide');
        if (index >= slides.length) currentSlide = 0;
        if (index < 0) currentSlide = slides.length - 1;
        slides.forEach((slide, i) => {
            slide.style.display = i === currentSlide ? 'block' : 'none';
        });
    }

    function changeSlide(step) {
        currentSlide += step;
        showSlide(currentSlide);
    }

    // Event listeners for the slider controls
    document.querySelector(".prev").addEventListener("click", () => changeSlide(-1));
    document.querySelector(".next").addEventListener("click", () => changeSlide(1));
});
