let images = document.querySelectorAll('.slider img');
let slider = document.querySelector('.slider');
let btnLeft = document.querySelector('.left');
let btnRight = document.querySelector('.right');
let current = 0;

let sliderFunc = function() {
	for (let i = 0; i < images.length; i++) {
		images[i].classList.add('opacity0');
	}
	images[current].classList.remove('opacity0');
}

sliderFunc();

btnLeft.onclick = function () {
	

	if (current-1 == -1) {
		current = images.length-1;
	}

	else {
		current --;
	}
	sliderFunc();
}

btnRight.onclick = function () {
	

	if (current+1 == images.length) {
		current = 0;
	}

	else {
		current ++;
	}
	sliderFunc();
}; 




