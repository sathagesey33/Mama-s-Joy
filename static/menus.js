// Get the profile button and the form
var profileButton = document.getElementById('profileButton');
var form = document.getElementById('childInfoForm');

// Add event listener to the profile button
profileButton.addEventListener('click', function() {
  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
});

// Get all the other buttons
var otherButtons = document.querySelectorAll('button:not(#profileButton)');

// Add event listeners to the other buttons
for (var i = 0; i < otherButtons.length; i++) {
  otherButtons[i].addEventListener('click', function() {
    form.style.display = 'none';
  });
}