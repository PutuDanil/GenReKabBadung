const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const menuIcon = document.querySelector('#menu-icon');
const navigation = document.querySelector('.navigation')
const navbg = document.querySelector('.nav-bg')

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active')
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active')
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup')
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup')
});

menuIcon.addEventListener('click', ()=> {
    menuIcon.classList.toggle('bx-x')
    navigation.classList.toggle('active')
    navbg.classList.toggle('active')
});