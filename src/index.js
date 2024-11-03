document.addEventListener('DOMContentLoaded', () => {
  let slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  const totalSlides = slides.length;
  const nextSlideBtn = document.getElementById('nextSlide');
  const prevSlideBtn = document.getElementById('prevSlide');
  const dots = document.querySelectorAll('.dot');

  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');

  function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    dots[currentSlide].style.backgroundImage = 'url("src/logo/inactive-dot.svg")';

    currentSlide = index;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    dots[currentSlide].style.backgroundImage = `url("src/logo/active-dot${currentSlide + 1}.svg")`;
  }

  function nextSlide() {
    let newIndex = (currentSlide + 1) % totalSlides;
    showSlide(newIndex);
  }

  function prevSlide() {
    let newIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(newIndex);
  }

  nextSlideBtn.addEventListener('click', nextSlide);
  prevSlideBtn.addEventListener('click', prevSlide);

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });

  setInterval(nextSlide, 5000);
});
