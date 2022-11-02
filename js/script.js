let icon = document.querySelector('.menu-icon');
let menu = document.querySelector('.menu');

icon.addEventListener('click', () => {
    menu.classList.toggle('_active');
    icon.classList.toggle('_active');
});
