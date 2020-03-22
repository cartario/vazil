'use strict';

(function () {
	//PalindormBlock

	let palindrom = document.querySelector('.palindrom');
	palindrom.style.width = 1000 + 'px';
	palindrom.style.backgroundColor = 'lightgrey';
	palindrom.style.padding = 10 + 'px';
	palindrom.style.margin = 10 + 'px';

		let onCheckClick = function () {
			let inputPalindrom = document.querySelector('.palindrom input');
			let palindromOut = document.querySelector('.palindrom__out');
			let str = inputPalindrom.value;
			palindromOut.textContent = checkPalindrom(str);
		};

		let palindromButton = document.querySelector('.palindrom__button');
		palindromButton.addEventListener('click', onCheckClick);

		const checkPalindrom = str => {
			str = str.toLowerCase();
			return str == str.split('').reverse().join('');
		};
})();

(function () {

	

	let arr = [1,15,23,14,8,-9,-11,0,5];


	let randomShuffleArr = function (arr) {
		arr.sort(() => Math.random() - 0.5);
		return arr;
	};
	
	console.log(randomShuffleArr(arr));

	function shuffle(arr){
		var j, temp;
		for(var i = arr.length - 1; i > 0; i--){
			j = Math.floor(Math.random()*(i + 1));


			temp = arr[j];
			

			arr[j] = arr[i];
			

			arr[i] = temp;
			
		}

		return arr;
	};

console.log(shuffle(arr));
		
})();

(function () {

	let rules = document.querySelector('.read-rules');
	let formSlider = document.querySelector('.form-slider');
	let readRulesBack = document.querySelectorAll('.read-rules-back');

	let onClickRules = function () {
		formSlider.style.marginLeft = '-250px';
		
	};

	rules.addEventListener('click', onClickRules);

	for ( let i = 0; i < readRulesBack.length; i++) {
		readRulesBack[i].addEventListener('click', function () {
			formSlider.style.marginLeft = '0px';
		})
	}
	

})();