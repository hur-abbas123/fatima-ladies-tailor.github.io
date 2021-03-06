const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('#navbar-logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);


$(function(){
  $(".menu-image").click(function(){
 $(".navbar-menu").slideToggle();
  })
});
