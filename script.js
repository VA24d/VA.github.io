// Snapping behavior
document.addEventListener('scroll', function() {
    let container = document.querySelector('.container');
    let sections = document.querySelectorAll('.section');
    let currentSectionIndex = Math.round(container.scrollLeft / window.innerWidth);
    let nextSectionIndex = currentSectionIndex + 1;

    // Snap to the next section
    container.scrollTo({
        left: nextSectionIndex * window.innerWidth,
        behavior: 'smooth'
    });
});