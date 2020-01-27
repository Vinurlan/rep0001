"use strict";

// Вызов формы
logAreaButton.onclick = function () {
	logArea.hidden = false;
	formBackground.hidden = false;
	loginForm.hidden = false;
	regForm.hidden = true;
	setTimeout( () => formBackground.classList.add("formBackgroundActive"), 0)
}

regAreaButton.onclick = function () {
	logArea.hidden = false;
	formBackground.hidden = false;
	loginForm.hidden = true;
	regForm.hidden = false;
	setTimeout( () => formBackground.classList.add("formBackgroundActive"), 0)

}

logFormClose.onclick = function () {
	logArea.hidden = true;
	formBackground.hidden = true;
	formBackground.classList.remove("formBackgroundActive");

}

regFormClose.onclick = function () {
	loginForm.hidden = false;
	regForm.hidden = true;
	logArea.hidden = true;
	formBackground.hidden = true;
	formBackground.classList.remove("formBackgroundActive");

}

logFormReg.onclick = function () {
	loginForm.hidden = true;
	regForm.hidden = false;
}

// Работа с формами

// Проверка ввода Name

regNameArea.onblur = function () {
	let lengthName = this.value.slice().length;
	
	if (lengthName < 4 || lengthName > 10) {
		this.classList.add("invalid");
	} else {
		if (this.classList.contains("invalid")) {
			this.classList.remove("invalid");
		}
	}
}

// Проверка ввода email
regEmailArea.onblur = function () {
	if (!regEmailArea.value.includes("@")) {
		regEmailArea.classList.add("invalid");
	}
}

regEmailArea.onfocus = function () {
	if (this.classList.contains("invalid")) {
		this.classList.remove("invalid");
	}
}

// Проверка ввода password

regPassArea.onblur = function () {
	let lengthPass = this.value.slice().length;
	
	if (lengthPass < 8 || lengthPass > 16) {
		this.classList.add("invalid");
	} else {
		if (this.classList.contains("invalid")) {
			this.classList.remove("invalid");
		}
	}
}