"use strict";


let windowSetting = document.createElement("div");
let listQuestsZone = document.createElement("div");
let buttonClose = document.createElement("button");
let questsButtonAdd = document.createElement("button");



menuQuests.onclick = function () {
		content.prepend(windowSetting);
		windowSetting.classList.add("settingQuests");
		
		
		windowSetting.append(buttonClose);
		buttonClose.textContent = "X";
		buttonClose.classList.add("settingQuestsCloseButton");
		
		windowSetting.prepend(listQuestsZone);
		listQuestsZone.classList.add("listQuestsZone");
		
		listQuestsZone.append(questsButtonAdd);
		questsButtonAdd.textContent = "+";
		questsButtonAdd.classList.add("questsButtons"); 
		questsButtonAdd.classList.add("questsButtonsAdd");
}


let arrQuests = document.querySelectorAll(".quests"); // список задач на странице
let questsButtonEdit = [];
let questsButtonDelete = [];
let arrQuestsList = []; // массив с задачами в разделе "Управление"

let i = 0;
for (let quest of arrQuests) {
	arrQuestsList[i] = quest.cloneNode(true);
	listQuestsZone.append(arrQuestsList[i]);

	questsButtonEdit[i] = document.createElement("button");
	arrQuestsList[i].prepend(questsButtonEdit[i]);
	questsButtonEdit[i].textContent = "Изменить";
	questsButtonEdit[i].classList.add("questsButtons");

	questsButtonDelete[i] = document.createElement("button");
	arrQuestsList[i].prepend(questsButtonDelete[i]);
	questsButtonDelete[i].textContent = "Удалить";
	questsButtonDelete[i].classList.add("questsButtons");

	i++;
}

let questsButtonDeleteYes = [];
let questsButtonDeleteNo = [];

let questsEditForm = document.createElement("form");	
let questsEditZone = document.createElement("div");
let questsEditFormButtonAssept = document.createElement("input");
let questsEditFormButtonBack = document.createElement("input");
let questsEditFormHeader = document.createElement("input");
let questsEditFormBody = document.createElement("input");


windowSetting.onclick = function() {	
	for (let ii = 0; ii < arrQuestsList.length; ii++) {	
		if (event.target == questsButtonDelete[ii]) {	

			questsButtonDeleteYes[ii] = document.createElement("button");
			questsButtonDeleteNo[ii] = document.createElement("button");

			arrQuestsList[ii].prepend(questsButtonDeleteYes[ii]);
			questsButtonDeleteYes[ii].textContent = "Да";
			questsButtonDeleteYes[ii].classList.add("questsButtons");
			questsButtonDeleteYes[ii].classList.add("questsButtonDeleteAccept");

			arrQuestsList[ii].prepend(questsButtonDeleteNo[ii]);
			questsButtonDeleteNo[ii].textContent = "Нет";
			questsButtonDeleteNo[ii].classList.add("questsButtons");
			questsButtonDeleteNo[ii].classList.add("questsButtonDeleteAccept");		
			
			setTimeout( function () {
				questsButtonDeleteYes[ii].style.width = "10%";
				questsButtonDeleteNo[ii].style.width = "10%";
			}, 1 );
			
			questsButtonDelete[ii].hidden = true;

			break;

		}		
	}

	for (let ii = 0; ii < arrQuestsList.length; ii++) {	
		if (event.target == questsButtonDeleteYes[ii]) {
			arrQuests[ii].remove();
			arrQuestsList[ii].remove();
			break;
		}

		if (event.target == questsButtonDeleteNo[ii]) {
			questsButtonDeleteYes[ii].remove();
			questsButtonDeleteNo[ii].remove();
			questsButtonDelete[ii].hidden = false;
			break;
		}
	}

	for (let ii = 0; ii < arrQuestsList.length; ii++) {	
		if (event.target == questsButtonEdit[ii]) {
			
			listQuestsZone.hidden = true;

			windowSetting.append(questsEditZone);
			questsEditZone.classList.add("listQuestsZone");

			questsEditZone.append(questsEditForm);
			questsEditForm.classList.add("questsEditForm");


			questsEditForm.append(questsEditFormHeader);
			questsEditFormHeader.setAttribute("placeholder", "Заголовок");
			let headerText = arrQuests[ii].querySelector("h3").innerText;
			questsEditFormHeader.setAttribute("value", `${headerText}`);
			questsEditFormHeader.classList.add("questsEditFormHeader");


			questsEditForm.append(questsEditFormBody);
			questsEditFormBody.setAttribute("placeholder", "Текст");	
			questsEditFormButtonBack.setAttribute("type", "text");
			let bodyText = arrQuests[ii].querySelector("span").innerText;
			questsEditFormBody.setAttribute("value", `${bodyText}`);
			questsEditFormBody.classList.add("questsEditFormBody");



			questsEditForm.append(questsEditFormButtonAssept);
			questsEditFormButtonAssept.setAttribute("type", "submit");
			questsEditFormButtonAssept.setAttribute("value", "Сохранить");


			questsEditForm.append(questsEditFormButtonBack);
			questsEditFormButtonBack.setAttribute("type", "button");
			questsEditFormButtonBack.setAttribute("value", "Отмена")

			break;

		}
	}

	if (event.target == questsEditFormButtonBack) {
		questsEditZone.remove();
		listQuestsZone.hidden = false;
	}

	if (event.target == questsEditFormButtonAssept) {
		
	}

	if (event.target == buttonClose) {
		windowSetting.remove();
	}
}


