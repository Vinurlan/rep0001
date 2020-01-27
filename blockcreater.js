import {MadalWindow} from "./effects.js";

export function addBlock(index) {
    MadalWindow.madalCreate();
    addContent();
}

function addContent () {
    let madal = document.getElementById("bodyBar").querySelector(".madal");

    let content = `
    <div class="addContentBlock" hidden>
            <select name="">
                <option>Новости</option>
                <option>Учения</option>
                <option>Задания</option>
            </select>
        <form id="addMainForm">           
            <input type="text" placeholder="Заголовок">
            <textarea name="textarea" placeholder="Содержимое"></textarea>
            <div class="formBtnBlock">
                <button type="submit" id="submitMadal">Добавить</button>
                <button type="button" id="closeMadal">Закрыть</button>
            </div>
        </form>
        <script type="module" src="madalblockhandler.js"></script> 
    </div>
    `;

    madal.innerHTML = content;  
    setTimeout(() => {madal.querySelector(".addContentBlock").hidden = false}, 1000);
}