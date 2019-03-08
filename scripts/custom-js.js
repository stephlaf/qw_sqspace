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

// Hide products section in Boutique page if less than 2 products available

var cond1 = location.pathname.split('/')[1] === 'boutique';
var cond2 = location.pathname.split('/').length === 2;
if (cond1 && cond2) {
  var availableProds = document.querySelector('.ProductList-grid.clear');
  if (availableProds.childNodes.length < 4) { availableProds.hidden = true };
}

// Change Quantity label on product show page to Quantité

if (location.pathname.split('/')[1] === 'boutique') {
  var quantityLabel = document.querySelector('.quantity-label');
  quantityLabel.innerText = 'Quantité :';
}
