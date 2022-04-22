const icon = document.querySelector(".nav-ul-hamb");
const menu = document.querySelector(".nav-ul-list");
const englishText = document.querySelectorAll('.english');
const portugueseText = document.querySelectorAll('.portuguese');
const menuLinks = document.querySelectorAll(".nav-li");
const mainTag = document.querySelector("main");
const iconFlag = document.querySelector('.nav-flag-main');



icon.addEventListener('click', showMenu);
menuLinks.forEach(n => n.addEventListener('click', selectLanguage));
mainTag.addEventListener('click', closeMenu);

function showMenu(){
    menu.classList.toggle("hidden");
}

function selectLanguage(e){
    // Check if the user is clicking the same language
    if(e.path[0].alt === iconFlag.alt){
        // If yes, do nothing and close the menu
        closeMenu();
    } else {
        // If not, update the UI, close the menu, and update the flag icon
        englishText.forEach(n => n.classList.toggle("hidden"));
        portugueseText.forEach(n => n.classList.toggle("hidden"));
        closeMenu();
        updateFlag();
    }
}

function closeMenu(){
    menu.classList.add("hidden");
}

function updateFlag(){
    if (iconFlag.alt === "us flag"){
        iconFlag.src="images/br_flag.svg";
        iconFlag.alt="br flag";
    } else {
        iconFlag.src="images/us_flag.svg";
        iconFlag.alt="us flag";
    }
}