const toggleMenu = document.querySelector('.toggle-menu');
const display = document.querySelector('.display');


toggleMenu.addEventListener('click', () => {
    toggleMenu.classList.toggle('active')
    display.classList.toggle('active')
});
