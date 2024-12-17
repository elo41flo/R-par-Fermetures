    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let index = 0;

    function updateCarousel() {
        const width = carousel.clientWidth;
        carousel.style.transform = `translateX(${-index * width}px)`;
    }

    nextButton.addEventListener('click', () => {
        index = (index + 1) % images.length; // Passe à l'image suivante
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        index = (index - 1 + images.length) % images.length; // Retourne à l'image précédente
        updateCarousel();
    });

    // Ajuste le carousel à la taille des images si la fenêtre change
    window.addEventListener('resize', updateCarousel);