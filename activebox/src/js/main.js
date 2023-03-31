const swiper = new Swiper('.citations-slider', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

const btn = document.querySelector('.burger')
const header = document.querySelector('.header')
const body = document.querySelector('body')

btn.addEventListener('click', () => {
	btn.classList.toggle('active')
	header.classList.toggle('active')
	body.classList.toggle('active')
})



