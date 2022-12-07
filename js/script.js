let slideIndex =1;
showSlides(slideIndex);

function moveTo(n){
	showSlides(slideIndex +=n);
}

function showSlides(n){
	let i;
	let slides = document.getElementsByClassName('header-bottomSileder');
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex =slides.length}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		slides[slideIndex-1].style.display = "flex"; 
}
function showMenuMobile(){
	let menuMobile = document.querySelector('.menu-moblie');
	if (menuMobile.classList.contains('open')) {
		menuMobile.classList.remove('open');
	}else{
		menuMobile.classList.add('open');
	}
}