'use strict';

(function () {


	var inputIn = document.querySelector('.input-in');
	var out = document.querySelector('.out');
	var card = document.querySelector('.card');







	card.setAttribute("style", "position: absolute; background-color: lightgrey; width: 200px; min-height: 100px; padding: 15px; border-radius: 10px");

	out.style.margin = 5+'px';


	let btn = document.querySelector('button');

	btn.onclick = function () {
		var b = +inputIn.value;
		console.log(typeof b);
		console.log(b);
		inputIn.value = '';
		out.textContent = b;
		out.setAttribute("style", "color:blue; width:100px; height: 50px; margin: 5px; padding: 5px; border: 1px solid tomato; transition: 1s ease all; border-radius: 10px");

	};

	window.main = {
		card: card

	}

})();