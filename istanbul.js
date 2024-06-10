document.addEventListener('DOMContentLoaded', function() {
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    const slide = document.querySelector('.slide');
    
    next.addEventListener('click', function() {
        const firstItem = slide.firstElementChild;
        slide.appendChild(firstItem.cloneNode(true));
        slide.removeChild(firstItem);
    });

    prev.addEventListener('click', function() {
        const lastItem = slide.lastElementChild;
        slide.insertBefore(lastItem.cloneNode(true), slide.firstElementChild);
        slide.removeChild(lastItem);
    });
});
