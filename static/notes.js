document.getElementById('new-note-button').addEventListener('click', function() {
    var noteTitle = document.getElementById('new-note-title').value;
    var noteContent = document.getElementById('new-note-content').value;
    var noteColor = document.getElementById('new-note-color').value;
    if (noteTitle || noteContent) {
      var noteElement = document.createElement('div');
      noteElement.style.backgroundColor = noteColor;
      noteElement.innerHTML = '<h2>' + noteTitle + '</h2><p>' + noteContent + '</p><button class="delete-note">Delete</button>';
      noteElement.querySelector('.delete-note').addEventListener('click', function() {
        noteElement.remove();
      });
      document.getElementById('notes-container').appendChild(noteElement);
      document.getElementById('new-note-title').value = '';
      document.getElementById('new-note-content').value = '';
      document.getElementById('new-note-color').value = '#ffffff';
    }
  });