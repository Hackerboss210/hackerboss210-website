// Adicione ao script.js

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');
    let currentIndex = 0;

    function showImage(index) {
        const displacement = -index * 100 + '%';
        carousel.style.transform = 'translateX(' + displacement + ')';
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    const prevButton = document.createElement('button');
    prevButton.classList.add('carousel-prev');
    prevButton.innerHTML = '&lt;';
    prevButton.addEventListener('click', prevImage);

    const nextButton = document.createElement('button');
    nextButton.classList.add('carousel-next');
    nextButton.innerHTML = '&gt;';
    nextButton.addEventListener('click', nextImage);

    document.querySelector('#section3').appendChild(prevButton);
    document.querySelector('#section3').appendChild(nextButton);
});
