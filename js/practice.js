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
	
	// console.log(randomShuffleArr(arr));

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

// console.log(shuffle(arr));
		
})();

(function () {
	let blockModalTest = document.querySelector('.block-modal-test');
	let rules = document.querySelector('.read-rules');
	let formSlider = document.querySelector('.form-slider');
	let readRulesBack = document.querySelectorAll('.read-rules-back');
	let modalShow = document.querySelector('.modal-show');
	let modalHide = document.querySelector('.modal-hide');

	let hide = function () {
		blockModalTest.style.display = 'none';
	};

	let show = function () {
		blockModalTest.style.display = 'block';
	};

	let onClickRules = function () {
		formSlider.style.marginLeft = '-250px';
		
	};

	rules.addEventListener('click', onClickRules);

	for ( let i = 0; i < readRulesBack.length; i++) {
		readRulesBack[i].addEventListener('click', function () {
			formSlider.style.marginLeft = '0px';
		})
	}

	modalHide.onclick = hide;
	modalShow.onclick = show;
	

})();

(function () {
	let btn = document.querySelector('.block-this__btn-1');
	let someText = document.querySelectorAll('.block-this__text');

	let changeColor = function () {
		this.style.background = 'tomato';
	};

	for (let i = 0; i < someText.length; i++) {
		someText[i].addEventListener('click', changeColor);
	}

	btn.addEventListener('click', changeColor);

	let U2 = function (model) {
		this.model = model;

		this.showThis = function () {
			// console.log(this.model);
		};
	};

	let boat = new U2 ('744');
	let boat2 = new U2 ('555');

	boat.showThis();
	boat2.showThis();
	

})();

(function () {

let inputRange = document.querySelector('.block-range__cont input[type="range"]');
let textOut = document.querySelector('.block-range__text');

textOut.textContent = inputRange.value;

inputRange.addEventListener('input', function(){
	textOut.style.left = inputRange.value - 14*(1 + inputRange.value*0.001) + 'px';

	textOut.textContent = inputRange.value;
});


})();

(function () {
	let btn1 = document.querySelector('.call-apply-bind__b1');
	let btn2 = document.querySelector('.call-apply-bind__b2');
	let btn3 = document.querySelector('.call-apply-bind__b3');
	let out = document.querySelector('.call-apply-bind__out');

	function changeColor (color, name, age) {
		this.style.backgroundColor = color;
		let outInfo = 'My name is ' + name + ' .My age is ' + age + ' My color is ' + color;
		out.textContent = outInfo;
	};

	btn1.onclick = function () {
		changeColor.call(btn1, 'red', 'artem', 28);
	};

 	let g =  changeColor.bind(btn2, 'green', 'stepan', 25);
 	btn2.onclick = g;

	btn3.onclick = function () {
		changeColor.apply(btn3, ['yellow', 'ivan', 26]);
	};

})();

(function () {

	let toggleCanva = document.querySelector('.toggle-canva');
	let toggleCircle = document.querySelector('.toggle-circle');
	let toggleText = document.querySelector('.toggle-text');

	let toggle = function () {

		if (toggleCanva.classList.contains('toggle-canva--on')) {
			toggleCanva.classList.remove('toggle-canva--on');
			toggleCanva.classList.add('toggle-canva--off');
			toggleText.style.display = 'block';
		} else {
			toggleCanva.classList.remove('toggle-canva--off');
			toggleCanva.classList.add('toggle-canva--on');
			toggleText.style.display = 'none';
		}

		if (toggleCircle.classList.contains('toggle-circle--on')) {
			toggleCircle.classList.remove('toggle-circle--on');
			toggleCircle.classList.add('toggle-circle--off');
		} else {
			toggleCircle.classList.remove('toggle-circle--off');
			toggleCircle.classList.add('toggle-circle--on');
		}

	}

	toggleCanva.onclick = toggle;

	let cssToggle = function () {
		let cbx = document.querySelector('.cbx');
		let toggleOut = document.querySelector('.toggle-out');
		let n = 0;

		cbx.addEventListener('change', function (evt) {
			if (evt.target.checked) {
				n = n + 1;
				toggleOut.textContent = `Чекбокс был включен ${n} раз`;
			}
		})
	}
	
	cssToggle();
})();