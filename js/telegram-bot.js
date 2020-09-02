(function () {

	let inputBot = document.querySelector('.bot__input');
	let buttonPushBot = document.querySelector('.bot__button');
	let buttonClearBot = document.querySelector('.bot__button--clear');
	let messageNo = document.querySelector('.message--no');
	let messageOk = document.querySelector('.message--ok');

	buttonPushBot.onclick = function () {
		let message = inputBot.value + ' [прыщага]';
		const token = '';
		const url = '';
		let xhttp = new XMLHttpRequest();

		xhttp.addEventListener('load', function () {
			if (xhttp.status === 200) {
				messageOk.style.display = 'block';
				messageOk.textContent = 'Сообщение успешно отправлено!';
			} else {
				messageNo.style.display = 'block';
				messageNo.textContent = 'Что-то пошло не так. Возможно строка пустая';

			}
		});

		xhttp.open('GET', url + message, true);
		xhttp.send();
	};

	buttonClearBot.onclick = function () {
		inputBot.value = '';
		messageNo.style.display = 'none';
		messageOk.style.display = 'none';
	};



})();
