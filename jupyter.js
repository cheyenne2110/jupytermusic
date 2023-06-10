 var slides = document.querySelectorAll('.slide');
        var currentSlide = 0;
        var slideInterval = setInterval(nextSlide, 4000); // Wechselt alle 2 Sekunden

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }