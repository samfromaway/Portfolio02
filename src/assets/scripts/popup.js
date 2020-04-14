// Popup 01

const modal02 = document.getElementById('modal02');
const modal03 = document.getElementById('modal03');

const imgPu02 = document.getElementById('productimg02');
const imgPu03 = document.getElementById('productimg03');

const close02 = document.getElementById('close02');
const close03 = document.getElementById('close03');

const span = document.getElementsByClassName('close')[0];

imgPu02.onclick = function() {
  modal02.style.display = 'flex';
};

close02.onclick = function() {
  modal02.style.display = 'none';
};

// Popup 02

imgPu03.onclick = function() {
  modal03.style.display = 'flex';
};

close03.onclick = function() {
  modal03.style.display = 'none';
};
