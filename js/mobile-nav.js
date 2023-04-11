// Mobile nav button
const navBtn = document.querySelector('.mobile-nav-btn');
const nav = document.querySelector('.mobile-nav');
const menuIcon = document.querySelector('.nav-icon');
const fade = document.querySelector('.mobile-nav-fade');

navBtn.onclick = function () {
	nav.classList.toggle('mobile-nav--open');
	fade.classList.toggle('mobile-nav-fade--open');
	menuIcon.classList.toggle('nav-icon--active');
	document.body.classList.toggle('no-scroll');
};

fade.onclick = function () {
	nav.classList.toggle('mobile-nav--open');
	fade.classList.toggle('mobile-nav-fade--open');
	menuIcon.classList.toggle('nav-icon--active');
	document.body.classList.toggle('no-scroll');
};


const btnUp = {
	el: document.querySelector('.btn-up'),
	show() {
	  // удалим у кнопки класс btn-up_hide
	  this.el.classList.remove('btn-up_hide');
	},
	hide() {
	  // добавим к кнопке класс btn-up_hide
	  this.el.classList.add('btn-up_hide');
	},
	addEventListener() {
	  // при прокрутке содержимого страницы
	  window.addEventListener('scroll', () => {
		// определяем величину прокрутки
		const scrollY = window.scrollY || document.documentElement.scrollTop;
		// если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
		scrollY > 400 ? this.show() : this.hide();
	  });
	  // при нажатии на кнопку .btn-up
	  document.querySelector('.btn-up').onclick = () => {
		// переместим в начало страницы
		window.scrollTo({
		  top: 0,
		  left: 0,
		  behavior: 'smooth'
		});
	  }
	}
  }
  
  btnUp.addEventListener();