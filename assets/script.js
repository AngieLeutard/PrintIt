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

// Slides

// let slide1 = slides[0] 
// let slide2 = slides[1] 
// let slide3 = slides[2] 
// let slide4 = slides[3] 


// Arrow

let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");


arrowLeft.addEventListener('click', function() {    
	alert("super");
});

arrowRight.addEventListener('click', function() {    
	alert("wahou");
});

// Dots

let dot1 = document.createElement("div");
dot1.classList.add("dot");

let dot2 = document.createElement("div");
dot2.classList.add("dot");

let dot3 = document.createElement("div");
dot3.classList.add("dot");

let dot4 = document.createElement("div");
dot4.classList.add("dot");

let dotContainer = document.querySelector(".dots");

dotContainer.appendChild(dot1);
dotContainer.appendChild(dot2);
dotContainer.appendChild(dot3);
dotContainer.appendChild(dot4);


