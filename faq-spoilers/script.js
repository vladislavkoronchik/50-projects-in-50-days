const btnToggles = document.querySelectorAll('.faq-btn-toggle');

const checkedFaqActive = (toggle) => {
	if (toggle.parentNode.getAttribute('data-active') === 'true') {
		toggle.parentNode.classList.add('active');
	}
}

btnToggles.forEach(toggle => {
	checkedFaqActive(toggle);
	toggle.addEventListener('click', () => {
		toggle.parentNode.classList.toggle('active');
	});
});