(function () {

	let inputBot = document.querySelector('.bot__input');
	let buttonPushBot = document.querySelector('.bot__button');
	let buttonClearBot = document.querySelector('.bot__button--clear');
	let messageNo = document.querySelector('.message--no');
	let messageOk = document.querySelector('.message--ok');

	buttonPushBot.onclick = function () {
		let message = inputBot.value;
		const token = '1096692113:AAHluOUmf6iDGJSB0muNDZd_V5Wl1wpWWiY';
		const url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=-389628606&text=';
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

	//https://api.telegram.org/bot<token>/METHOD_NAME

	//https://api.telegram.org/bot1096692113:AAHluOUmf6iDGJSB0muNDZd_V5Wl1wpWWiY/getUpdates

	//https://api.telegram.org/bot1096692113:AAHluOUmf6iDGJSB0muNDZd_V5Wl1wpWWiY/sendMessage?chat_id=-389628606&text=hi_i_am_bot
})();