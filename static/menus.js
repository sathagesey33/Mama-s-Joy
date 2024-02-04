document.getElementById('profileButton').addEventListener('click', function() {
    var form = document.getElementById('childInfoForm');
    if (form.style.display === 'none') {
      form.style.display = 'block';
    } else {
      form.style.display = 'none';
    }
  });