const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = [
	"Воскресенье",
	"Понедельник",
	"Вторник",
	"Среда",
	"Четверг",
	"Пятница",
	"Суббота"
];

const months = [
	"Январь",
	"Февраль",
	"Март",
	"Апрель",
	"Май",
	"Июнь",
	"Июль",
	"Август",
	"Сентябрь",
	"Октябрь",
	"Ноябрь",
	"Декабрь"
];

toggle.addEventListener('click', e => {
	const html = document.querySelector('html');
	if (html.classList.contains('dark')) {
		html.classList.remove('dark');
		e.target.innerHTML = 'Тёмная тема';
	} else {
		html.classList.add('dark');
		e.target.innerHTML = 'Светлая тема';
	}
});

function setTime() {
	const time = new Date();
	const weekDay = time.getDay();
	const month = time.getMonth();
	const day = time.getDate();
	const hours = time.getHours();
	const hoursForClock = hours % 12;
	const minutes = time.getMinutes();
	const second = time.getSeconds();

	hourEl.style.cssText = `transform: translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;
	minuteEl.style.cssText = `transform: translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
	secondEl.style.cssText = `transform: translate(-50%, -100%) rotate(${scale(second, 0, 60, 0, 360)}deg)`;

	timeEl.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
	dateEl.innerHTML = `${days[weekDay]}, ${months[month]} <span class="circle">${day}</span>`;
}

function scale(number, inMin, inMax, outMin, outMax) {
	return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setTime();

setInterval(setTime, 1000);