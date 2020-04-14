const scrollBehavior02 = 'smooth';

//----Arrow Click Scroll----//

const scrollPosition03 = document.getElementById('title06');
function scrollNext01() {
  scrollPosition03.scrollIntoView({ behavior: scrollBehavior02 });
}

//---- Appearanim01----//

$(document).ready(function appearanim01() {
  $(window).scroll(function (event) {
    let scrollPosition01 = $(this).scrollTop();
    if (scrollPosition01 >= 400) {
      $('#navCards').addClass('animateMe');
    }
  });
});

//---- Image Slide In ----//

const sliders01 = document.querySelectorAll('.appearanim01');

const appearOptions = {
  threshold: 0,
  rootMargin: '0px 0px -200px 0px',
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

sliders01.forEach((slider) => {
  appearOnScroll.observe(slider);
});

//---- Fade In ----//

const fade01 = document.querySelectorAll('.fadeinanim01');

const fadeOptions = {
  threshold: 0,
  rootMargin: '0px 0px -200px 0px',
};

const fadeOnScroll = new IntersectionObserver(function (entries, fadeOnScroll) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('fadein01');
      fadeOnScroll.unobserve(entry.target);
    }
  });
}, fadeOptions);

fade01.forEach((fade01) => {
  appearOnScroll.observe(fade01);
});

//----Menu Scroll----//

function scrollAboutMe() {
  scrollPosition03.scrollIntoView({ behavior: scrollBehavior02 });
  scrollBehaviorMenu();
}

const scrollPosition04 = document.getElementById('title03');
function scrollWork() {
  scrollPosition04.scrollIntoView({ behavior: scrollBehavior02 });
  scrollBehaviorMenu();
}

const scrollPosition05 = document.getElementById('title05');
function scrollContact() {
  scrollPosition05.scrollIntoView({ behavior: scrollBehavior02 });
  scrollBehaviorMenu();
}

function scrollBehaviorMenu() {
  nav.classList.toggle('nav-active');
  burger.classList.toggle('burger-active');
}
