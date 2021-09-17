const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const authorAvatar = document.getElementById('author-avatar');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgTexts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
	header.innerHTML = `<img class="card__img" src="https://images.unsplash.com/photo-1559163499-413811fb2344?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGxhcHRvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">`;
	title.innerHTML = `Далеко-далеко за словесными горами`;
	excerpt.innerHTML = `Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты`;
	authorAvatar.innerHTML = `<img class="card__author-img" src="https://randomuser.me/api/portraits/men/43.jpg" alt="">`;
	name.innerHTML = `Андрей Петров`;
	date.innerHTML = `8 ноября 2020`;
	
	animatedBgs.forEach(bg => bg.classList.remove('animated-bg'));
	animatedBgTexts.forEach(bg => bg.classList.remove('animated-bg-text'));
}
