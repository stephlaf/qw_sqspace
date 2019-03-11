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

// Translate Empty Shopping cart message

var cartNameTranslate = () => {
  if (location.pathname === "/cart") {
    var cartHeader = document.querySelector('.CartHeader-cartTitle-9Dk3d.cart-title');
    cartHeader.innerText = "Panier d'achats";
    
    var shopUrl = 'https://philippe-courchesneleboeuf.squarespace.com/boutique';
    var shoppingLink = document.querySelector('[data-test="continue-shopping-link"]');

    if (shoppingLink !== null) {
      shoppingLink.setAttribute('href', shopUrl);
      shoppingLink.innerText = 'Continuez à magasiner !';
      
      var emptyMessage = document.querySelector('[data-test="empty-message"]');
      emptyMessage.children[0].innerText = 'Votre panier est vide. ';
    } 
  }
};

document.addEventListener("DOMContentLoaded", cartNameTranslate);


// Dropdown menu on Accueil link in navbar for main page only

var dropdownLink = document.querySelector('.Header-nav-item');
var dropDownMenu = document.getElementById('dropUl');
var h2s = document.querySelectorAll('h2');

h2s.forEach((h2) => {
  if (h2.innerText === 'SPECTACLES') {
    h2.parentElement.parentElement.parentElement.setAttribute("id", "spectacles");
  } else if (h2.innerText.includes('QUI EST QW4RTZ ?')) {
    h2.parentElement.parentElement.parentElement.setAttribute("id", "groupe");
  } else if (h2.innerText === 'MUSIQUE') {
    h2.parentElement.parentElement.parentElement.setAttribute("id", "musique");
  }
});

var addClass = () => {
  dropdownLink.classList.add('droplink');
  dropDownMenu.classList.add('hideDrop');
};

var closeDropDown = () => {
  if (!dropDownMenu.classList.contains('hideDrop')) {
    dropDownMenu.classList.add('hideDrop');
  }
};

var dropDown = (event) => {
  event.preventDefault();
  dropDownMenu.classList.toggle('hideDrop');
  event.stopPropagation();
};

if (location.pathname === '/') {
  document.addEventListener("click", closeDropDown, false);
  dropdownLink.addEventListener('click', dropDown, false);
}

document.addEventListener("DOMContentLoaded", addClass);
