  (function () {
        const slides = document.querySelectorAll('#scholarship-slider .slider-slide');
        const dots = document.querySelectorAll('.slider-dot');
        const total = slides.length;
        let current = 0;
        let timer = null;

        function showSlide(i) {
          slides.forEach((s, idx) => {
            s.style.opacity = idx === i ? '1' : '0';
            s.style.zIndex = idx === i ? '1' : '0';
          });
          dots.forEach((d, idx) => {
            d.classList.toggle('bg-amber', idx === i);
            d.classList.toggle('bg-white/50', idx !== i);
          });
          current = i;
        }

        function startAutoSlide() {
          timer = setInterval(() => showSlide((current + 1) % total), 4000);
        }

        dots.forEach((dot) => {
          dot.addEventListener('click', () => {
            clearInterval(timer);
            showSlide(parseInt(dot.dataset.goto, 10));
            startAutoSlide();
          });
        });

        showSlide(0);
        startAutoSlide();
      })();