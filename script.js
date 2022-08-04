const header = document.querySelector('header');
const logo = document.querySelector('.header-logo');
const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('.link');

let scroll = (window.onscroll = function () {
  if (window.scrollY > 10) {
    header.style.background = '#2d314d';
    header.style.opacity = 0.95;

    navbar.classList.add('active');
    links.forEach((link) => {
      link.style.color = '#fff';
    });

    logo.style.filter = 'brightness(0) invert(1)';
  } else {
    header.style.background = '#fff';
    header.style.opacity = 1;

    navbar.classList.remove('active');
    links.forEach((link) => {
      link.style.color = 'hsl(233, 8%, 62%)';
    });
    logo.style.filter = 'none';
  }
});

const inviteCloser = document.querySelector('.invite-closer');
const inviteSection = document.querySelector('.invite-section');
const inviteButton = document.querySelector('.invite-button');

inviteButton.onclick = function () {
  inviteSection.style.display = 'flex';
};

inviteCloser.onclick = function () {
  inviteSection.style.display = 'none';
};

const home = document.querySelector('.home');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');
const icons = document.querySelectorAll('.icon');

home.addEventListener('click', function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

about.addEventListener('click', function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 765;
});

contact.addEventListener('click', function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 100000;

  icons.forEach((icon) => {
    icon.style.animation = 'animate 1s linear infinite';

    setTimeout(function () {
      icons.forEach((icon) => {
        icon.style.animation = 'none';
      });
    }, 5000);
  });
});

const hamburger = document.querySelector('.hamburger');

hamburger.onclick = function () {
  navbar.classList.toggle('activate');
};
