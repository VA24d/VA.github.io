document.addEventListener('DOMContentLoaded', function () {
    const slideContainer = document.querySelector('.slide-container');

    slideContainer.addEventListener('scroll', function () {
        const slides = document.querySelectorAll('.slide');
        const currentScroll = slideContainer.scrollLeft;
        let targetSlide = null;

        slides.forEach(function (slide) {
            const slideOffset = slide.offsetLeft - slideContainer.offsetLeft;

            if (slideOffset <= currentScroll + (window.innerWidth / 2)) {
                targetSlide = slide;
            }
        });

        if (targetSlide) {
            slideContainer.scrollTo({
                left: targetSlide.offsetLeft - slideContainer.offsetLeft,
                behavior: 'smooth'
            });
        }
    });
});
