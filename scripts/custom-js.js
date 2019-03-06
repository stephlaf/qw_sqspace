var mainPage = document.querySelector('.Main.Main--page');

var louis = document.querySelector('.Main.Main--page').childNodes[1].firstElementChild.textContent;

if (louis.includes("LOUIS-ALEXANDRE")) {mainPage.hidden = true};
