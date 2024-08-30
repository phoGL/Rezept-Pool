let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const nextButton = document.querySelector('.slider-button.next');
const prevButton = document.querySelector('.slider-button.prev');

function showSlide(index) {
    const offset = -index * 100 / totalSlides;
    slides[0].parentElement.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
