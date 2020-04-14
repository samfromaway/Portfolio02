//----Menu----//
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

const navSlide = () => {
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('burger-active');
  });
};

navSlide();

// Contact Form Red Border

$(function () {
  $('#myform').submit(function () {
    var valid = 0;
    $(this)
      .find('input[type=text], textarea[name=message]')
      .each(function () {
        if ($(this).val() != '') {
          valid++;
          $(this).css('border-color', 'initial');
        } else {
          $(this).css('border-color', 'red');
        }
      });

    if (valid > 0) {
      return true;
    } else {
      return false;
    }
  });
});

// Preload Images

let images = new Array();
function preload() {
  for (i = 0; i < preload.arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}
preload(
  'images/howtomedellin01.png',
  'images/portfolio01.png',
  'images/how-to-expat01.png',
  'images/how-to-expat01.png',
  'images/bibus01.png',
  'images/traveling-silverback01.png',
  'images/Icons02-HTM.png',
  'images/Icons02-Portfolio.png',
  'images/Icons02-HTE.png',
  'images/Icons02-HTE-S.png',
  'images/icons02-BIBUS.png',
  'images/Icons02-Silverback.png'
);
