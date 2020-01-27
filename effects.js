export class MadalWindow {
    static madalCreate () {
        let madalbg = document.createElement("div");
        let madal = document.createElement("div");
        
        madal.classList.add("madal", "madalLoad");
        setTimeout(() => madal.classList.remove("madalLoad"), 10);
        madalbg.classList.add("madalBg", "madalBgLoad");
        setTimeout(() => madalbg.classList.remove("madalBgLoad"), 10);
    
        document.querySelector(".body").append(madalbg);
        document.querySelector(".madalBg").append(madal);
    }

    static madalDelete () {
        document.querySelector(".madal").remove();
        document.querySelector(".madalBg").remove();
    }
}
