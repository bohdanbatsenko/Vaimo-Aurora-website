

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS

// header active

	window.addEventListener('scroll', function () {
		let header = document.querySelector('.site-header');
		let windowPosition = window.scrollY >= 100;
		header.classList.toggle('header-active', windowPosition);
	})



//navigation Vanilla JS

	const menu = document.querySelector('.nav'),
	burger = document.querySelector('.burger'),
	mobileBack = document.querySelector('.mobile-back'),
	overlay = document.querySelector('.overlay');
	const ourStoresMobile = document.querySelector('.nav-mobile-bottom-wrapper .our-stores-wrapper');
	const weDeliverMobile = document.querySelector('.we-deliver-mobile');

const lockScroll = () => {
	document.body.classList.add('lock');
}
const unlockScroll = () => {
	document.body.classList.remove('lock');
}

const initialMenu = () => {
	document.querySelector('.nav__list--dropdown').classList.remove('transformation');
	document.querySelector('.nav').querySelector('.nav__list').classList.remove('transformation');
	scrollTop();
}

const scrollTop = () => {
	menu.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}


burger.addEventListener('click', () => {
	menu.classList.add('open');
	overlay.classList.add('open');
	lockScroll();
	initialMenu();
});

overlay.addEventListener('click', () => {
	menu.classList.remove('open');
	overlay.classList.remove('open');
	unlockScroll();
});


menu.addEventListener('click', (e) => {
	e.preventDefault();

	if(e.target.classList.contains('nav__link--drop')) {
		e.preventDefault();
		e.target.closest('.nav__list').classList.add('transformation');
		e.target.closest('.nav__item').querySelector('.nav__list--dropdown').classList.add('transformation');
		ourStoresMobile.classList.remove('hidden');
		weDeliverMobile.classList.remove('hidden');
		scrollTop();
	}

	if(e.target.classList.contains('mobile-back__link')){
		e.preventDefault();
		e.target.closest('.nav__list--dropdown').classList.remove('transformation');
		e.target.closest('.nav').querySelector('.nav__list').classList.remove('transformation');
		ourStoresMobile.classList.add('hidden');
		weDeliverMobile.classList.add('hidden');		
		scrollTop();
	}

	if(e.target.classList.contains('nav__link')
		&& !e.target.classList.contains('nav__link--drop')) {
			e.preventDefault();
			menu.classList.remove('open');
			overlay.classList.remove('open');
			unlockScroll();
		}

});



// footer menu
const ListItem = document.querySelectorAll('.footer__list-item');
const ListSubmenu = document.querySelectorAll('.footer__list .footer__list-dropdown');

ListItem.forEach((link,index) =>{
	link.addEventListener('click', (e) => {
		e.preventDefault();

	if (link.classList.contains('footer-link-active')) {

		link.classList.remove('footer-link-active');
		link.classList.remove('footer__link--drop--active');
		ListSubmenu[index].classList.remove('footer-sublist-active');
	} else {

		ListSubmenu.forEach((elem) => {
			elem.classList.remove('footer-sublist-active');
		});

		ListItem.forEach((listItem) => {
			listItem.classList.remove('footer-link-active');

		})

		ListSubmenu[index].classList.add('footer-sublist-active');
		link.classList.add('footer-link-active');
		link.classList.add('footer__link--drop--active');

	}
});
});







//auth signin
const buttonAuth = document.querySelector('.sign-in');
const register = document.querySelector('.register');
const divider = document.querySelector('.divider');
const basketCircle = document.querySelector('.basket-circle-wrapper');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const userName = document.querySelector('.user-name');

const loginForm = document.getElementById('logInForm');
const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('password');



const login = (user) => {
	buttonAuth.style.display = 'none';
	register.style.display = 'none';
	divider.style.display = 'none';
	basketCircle.style.display = 'flex';

	//buttonOut.style.display = 'flex';
	userName.style.display = 'flex';
	userName.textContent = user.login;
	modalAuth.style.display = 'none';
}

// const logout = () => {
// 	buttonAuth.style.display = 'flex';
// 	buttonOut.style.display = 'none';
// 	userName.style.display = 'none';
// 	userName.textContent = '';
// 	localStorage.removeItem('user');
// }

buttonAuth.addEventListener('click', () => {
	modalAuth.style.display = 'flex';
});
closeAuth.addEventListener('click', () => {
	modalAuth.style.display = 'none';
});

loginForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const user = {
		login: inputLogin.value,
		password: inputPassword.value,
	}
	if (inputLogin.value.trim() === '') {
		alert('Please enter your password');
		return;
	}
	login(user);
});


// Toggle search on mobile
const mobSearch = document.querySelector(".search-mobile");
const mobSearchBar = document.querySelector('.search-container');


mobSearch.addEventListener("click", function (event) {
	event.preventDefault();
	mobSearch.classList.toggle('mob-search-active');
  mobSearchBar.classList.toggle("search-container-active");
});






	
})
