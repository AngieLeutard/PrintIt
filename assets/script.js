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


// Images 

let image = document.querySelector("#banner .slide")

// Slider Text

let text = document.querySelector("#banner p");

// Arrow

let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");


arrowLeft.addEventListener('click', function() {  
	image.setAttribute("src", "./assets/images/slideshow/slide4.png");
	text.innerHTML = slides[3].tagLine; 
	dot1.classList.remove("dot_selected");
	dot4.classList.add("dot_selected");

});

arrowRight.addEventListener('click', function() {    
	image.setAttribute("src", "./assets/images/slideshow/slide2.jpg");
	text.innerHTML = slides[1].tagLine; 
	dot1.classList.remove("dot_selected");
	dot2.classList.add("dot_selected");
});

// Dots

let dotContainer = document.querySelector(".dots");

let dot1 = document.createElement("div");
dot1.classList.add("dot", "dot_selected");

let dot2 = document.createElement("div");
dot2.classList.add("dot");

let dot3 = document.createElement("div");
dot3.classList.add("dot");

let dot4 = document.createElement("div");
dot4.classList.add("dot");

dotContainer.appendChild(dot1);
dotContainer.appendChild(dot2);
dotContainer.appendChild(dot3);
dotContainer.appendChild(dot4);




