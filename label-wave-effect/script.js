const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
	label.innerHTML = label.innerText.split('').map((letter, idx) => `<span style="transition-duration: ${idx * 100}ms">${letter}</span>`).join('');
})