const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconX = document.querySelector('.X');


registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconX.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

document.querySelector('.overlay').classList.add('active');
document.querySelector('.overlay').classList.remove('active');