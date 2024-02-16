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

function autoExpand(element) {
  element.style.height = 'inherit';
  const computed = window.getComputedStyle(element);
  const height = parseInt(computed.getPropertyValue('border-top-width'), 10)
               + parseInt(computed.getPropertyValue('padding-top'), 10)
               + element.scrollHeight
               + parseInt(computed.getPropertyValue('padding-bottom'), 10)
               + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

  element.style.height = height + 'px';
}

document.getElementById('new-note-title').addEventListener('input', function() {
  autoExpand(this);
});

document.getElementById('new-note-content').addEventListener('input', function() {
  autoExpand(this);
});

document.getElementById('notes-container').addEventListener('click', function(event) {
  if (event.target.classList.contains('note')) {
    event.target.classList.toggle('expanded');
  }
});