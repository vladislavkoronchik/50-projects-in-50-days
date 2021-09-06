const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, idx) => {
	cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx) {
	if (smallCups[idx].classList.contains('full') && idx === (smallCups.length - 1) || smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
		idx--;
	}

	smallCups.forEach((cup, idx2) => {
		if (idx2 <= idx) {
			cup.classList.add('full');
		} else {
			cup.classList.remove('full');
		}
	});

	updateBigCup();
}

function updateBigCup() {
	const fullCups = document.querySelectorAll('.cup-small.full').length;
	const totalCups = smallCups.length;

	if (fullCups === 0) {
		percentage.style.cssText = 'height: 0; visibility: hidden;';
	} else {
		percentage.style.cssText = `height: ${fullCups / totalCups * 330}px; visibility: visible;`;
		percentage.innerText = `${(fullCups / totalCups * 100)}%`;
	}

	if (fullCups === totalCups) {
		remained.style.cssText = 'height: 0; visibility: hidden;';
	} else {
		remained.style.cssText = '';
		liters.innerText = `${2 - (250 * fullCups / 1000)}Л`;
	}
}