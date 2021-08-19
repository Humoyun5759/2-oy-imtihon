const elHeader = document.querySelector('.header');
const elHamburger = document.querySelector('.hamburger');

elHamburger.addEventListener('click', () => {
	elHeader.classList.toggle('header--open');
});