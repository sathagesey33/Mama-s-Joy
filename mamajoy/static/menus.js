// // Get the profile button and the form
// var profileButton = document.getElementById('profileButton');
// var form = document.getElementById('childInfoForm');

// // Add event listener to the profile button
// profileButton.addEventListener('click', function() {
//   if (form.style.display === 'none') {
//     form.style.display = 'block';
//   } else {
//     form.style.display = 'none';
//   }
// });

// // Get all the other buttons
// var otherButtons = document.querySelectorAll('button:not(#profileButton)');

// // Add event listeners to the other buttons
// for (var i = 0; i < otherButtons.length; i++) {
//   otherButtons[i].addEventListener('click', function() {
//     form.style.display = 'none';
//   });
// }

window.onload = function() {
  var childInfoForm = document.getElementById('childInfoForm');
  var profileButton = document.getElementById('profileButton');

  // Check if the form's state is saved in localStorage
  var isFormVisible = localStorage.getItem('isFormVisible');

  // Hide the form by default
  childInfoForm.style.display = 'none';

  // If the form's state is saved in localStorage, apply it
  if (isFormVisible === 'true') {
    childInfoForm.style.display = 'flex';
  }

  profileButton.addEventListener('click', function(event) {
    // Prevent the document click event from hiding the form
    event.stopPropagation();

    // Toggle the form's visibility
    if (childInfoForm.style.display === 'none') {
      childInfoForm.style.display = 'flex';
      localStorage.setItem('isFormVisible', 'true');
    } else {
      childInfoForm.style.display = 'none';
      localStorage.setItem('isFormVisible', 'false');
    }
  });

  document.addEventListener('click', function(event) {
    // If a button that's not the profileButton is clicked, hide the form
    var target = event.target;
    while (target != null) {
      if (target === profileButton) return;
      if (target.tagName === 'BUTTON') {
        childInfoForm.style.display = 'none';
        localStorage.setItem('isFormVisible', 'false');
        return;
      }
      target = target.parentElement;
    }
  });
}