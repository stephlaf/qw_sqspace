// Hide English Link in nav menu

document.querySelector('.Header-nav-folder-title').text = '';

// Remove Louis from bottom of profile pages

var mainPage = document.querySelector('.Main.Main--page');

if (mainPage !== null) {
  var louis = mainPage.childNodes[1].firstElementChild.textContent;
  if (louis.includes("LOUIS-ALEXANDRE")) {mainPage.hidden = true};
}

// Change text of bands in town ticket buttons

var renameBtns = () => {
  var billetsBtns = document.querySelectorAll('.sqs-tourdates__button');
  // var moreShowsBtn = document.querySelectorAll('.sqs-block-button-element--small.sqs-block-button-element')[1];

  // moreShowsBtn.text = "Plus de Spectacles";

  billetsBtns.forEach((button, i) => { 
    if (i%2 === 0) {
      button.text = 'billets';
    }else {
      button.text = 'rsvp';
    }
  });
  dateFormat();
};


var dateFormat = () => {
  var options = { weekday: 'short', month: 'short', day: 'numeric' };
  var dateFields = document.querySelectorAll('.sqs-tourdates__timeframe');

  dateFields.forEach((field) => {
    var dateString = field.dataset["tourDatetime"];
    var dateFrStr = new Date(dateString);
    frenchDate = dateFrStr.toLocaleDateString("fr", options).toUpperCase();
    field.innerText = frenchDate.split('.').join('');
  });
  unScroll();
}

var scroll = () => { window.addEventListener('scroll', renameBtns) };
var unScroll = () => { window.removeEventListener('scroll', renameBtns) };

document.addEventListener("DOMContentLoaded", scroll);

// <i class="fab fa-twitter"></i>
// <i class="fab fa-instagram"></i>
