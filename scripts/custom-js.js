// // Remove Louis from bottom of profile pages

var mainPage = document.querySelector('.Main.Main--page');

if (mainPage !== null) {
  var louis = mainPage.childNodes[1].firstElementChild.textContent;
  if (louis.includes("LOUIS-ALEXANDRE")) {mainPage.hidden = true};
}

// // Change text of bands in town ticket buttons

var billetsBtns = document.querySelectorAll('.sqs-tourdates__item');
// var billetsBtns = document.querySelectorAll('.sqs-tourdates__button');
// console.log(billetsBtns);

var renameBtns = () => {
  // billetsBtns.forEach((button, i) => { 
    // console.log('button');
    // if (i%2===0) {
    //   button.text = 'billets'
    // }else {
    //   button.text = 'rsvp'
    // }
  // });
};

document.addEventListener("DOMContentLoaded",renameBtns);
// console.log('test');
