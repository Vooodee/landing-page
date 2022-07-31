"use strict";

function openMenu() {
  let btn = document.querySelector('.navbar-toggler'),
      menu = document.querySelector('.header__menu')
  
      btn.classList.toggle('open')
      menu.classList.toggle('open')
}