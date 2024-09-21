const casesContainer = document.querySelector('.cases');
let isDown = false;
let startX;
let scrollLeft;

casesContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    casesContainer.classList.add('active');
    startX = e.pageX - casesContainer.offsetLeft;
    scrollLeft = casesContainer.scrollLeft;
});

casesContainer.addEventListener('mouseleave', () => {
    isDown = false;
    casesContainer.classList.remove('active');
});

casesContainer.addEventListener('mouseup', () => {
    isDown = false;
    casesContainer.classList.remove('active');
});

casesContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - casesContainer.offsetLeft;
    const walk = (x - startX) * 2; // The multiplier (2) controls the scroll speed
    casesContainer.scrollLeft = scrollLeft - walk;
});
