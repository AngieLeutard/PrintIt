const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// Dots

let dots = [];
let dotContainer = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("div");
	dot.classList.add("dot");
	if (i == 0) {
		dot.classList.add("dot_selected");
	}
	dots[i] = dot;
	dotContainer.appendChild(dot);
}

// Images 

let image = document.querySelector("#banner .slide");


// Slider Text

let text = document.querySelector("#banner p");

// Arrow

let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");

i = 0;

let totalSlides = slides.length;

arrowLeft.addEventListener('click', function() { 
	i--;
	if (i<0) {
		i = slides.length - 1;
		dots[0].classList.remove('dot_selected');
	} else {
		dots[i + 1].classList.remove('dot_selected');
	}
	image.setAttribute("src", "./assets/images/slideshow/" + slides[i].image);
	text.innerHTML = slides[i].tagLine; 
	dots[i].classList.add('dot_selected');
});

arrowRight.addEventListener('click', function() {
	i++;
	if (i==slides.length) {
		i = 0
		dots[slides.length - 1].classList.remove('dot_selected');
	} else {
		dots[i - 1].classList.remove('dot_selected');
	}
	image.setAttribute("src", "./assets/images/slideshow/" + slides[i].image);
	text.innerHTML = slides[i].tagLine;
	dots[i].classList.add('dot_selected');
});





