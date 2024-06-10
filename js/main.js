document.addEventListener("DOMContentLoaded", function() {

    // Content Animation

    const content = document.querySelector('.content');

   content.classList.add('show');

});

document.getElementById('explore-btn').addEventListener('click', function() {

    document.getElementById('cards-section').scrollIntoView({ behavior: 'smooth' });

});
