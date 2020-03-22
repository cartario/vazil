'use strict';

let out = document.querySelector('.out');
let out2 = document.querySelector('.out-2');

let setStyle = function (name) {
	name.style.width = 200 + 'px';
	name.style.margin = 10 + 'px';
	name.style.padding = 20 + 'px';
	name.style.backgroundColor = 'tomato';
	name.style.borderRadius = '5px';
};

setStyle(out);
setStyle(out2);

let arr = [0, 5, 7, 8, 41, -17, 4, -4, -45];

let randomShuffleArr = function (arr, amount) {
	let j, temp;
	for (let i = arr.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));

		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;

	}

	return arr.slice(0, amount);
};

out.textContent = randomShuffleArr(arr, 5).sort((a, b) => a - b);

let person = [
	{name: 'ivan', age: 25},
	{name: 'alisa', age: 26},
	{name: 'alisa', age: 30},
	{name: 'petr', age: 27}
];




let sortName = person.sort(function (a, b) {
	if (a.name > b.name) {
		return 1;
	}

	if (a.name < b.name) {
		return -1
	}

	if (a.name = b.name) {
		return 0
	}
}).map( it => it.name );

console.log(sortName);



out2.textContent = sortName;