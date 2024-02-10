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

// document.querySelector('.login-form form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     // Perform login validation here or send form data to server
//     // If login is successful:
//     window.location.href = '/templates/Dashboard/nav.html';
//   });

//   document.querySelector('.registration-form form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     // Perform registration validation here or send form data to server
//     // If registration is successful:
//     window.location.href = '/templates/Dashboard/nav.html';
//   });