"use strict";
import {addBlock} from "./blockcreater.js";
import {MadalWindow} from "./effects.js";

const asideMenu = document.getElementById("sidebarList");
const listMenu = asideMenu.querySelectorAll("button");
const bodyBar = document.getElementById("bodyBar");



asideMenu.addEventListener("click", chooseMenuHandler);
bodyBar.addEventListener("click", showMore);


function chooseMenuHandler (event) {
    let viewMenu = -1;
    for (let node of listMenu) {
        node.classList.remove("focusBtn");

        viewMenu = event.target.value;
    };
    event.target.classList.add("focusBtn");

    bodyBar.querySelectorAll(".mainBodyBarPage").forEach((element, index) => {
        index == viewMenu ? element.hidden = false : element.hidden = true
    });
}

function showMore (event) {
    let target = event.target;
    if (target.classList.contains("addButton")) {      
        addBlock();
 
        document
        .getElementById("closeMadal")
        .addEventListener("click", MadalWindow.madalDelete);
        
    } else {
        if (target.classList.contains("block")) {
            target.classList.toggle("blockOpened");
            target.querySelector("span").hidden = !event.target.querySelector("span").hidden;
            
        }
    }
}