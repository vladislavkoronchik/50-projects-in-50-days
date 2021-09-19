function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (let i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage += 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);

function fixNav() {
	if (window.scrollY > nav.offsetHeight + 150) {
		nav.classList.add('nav-sticky');
	} else {
		nav.classList.remove('nav-sticky');
	}
}
