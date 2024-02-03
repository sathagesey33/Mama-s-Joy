const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopups = document.querySelectorAll('.btnlogin-popup'); // Select all buttons with the class .btnlogin-popup
const iconX = document.querySelector('.X');

registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

// Add event listener to all buttons with the class .btnlogin-popup
btnPopups.forEach(btnPopup => {
    btnPopup.addEventListener('click', ()=> {
        wrapper.classList.add('active-popup');
    });
});

iconX.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});