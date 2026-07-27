function addNote() {

  // Get text from textarea
  var note = document.getElementById("note").value;

  // If empty, stop
  if (note == "") {
    return;
  }

  // Create new list item
  var li = document.createElement("li");

  // Put note text inside it
  li.textContent = note;

  // Create delete button
  var btn = document.createElement("button");
  btn.textContent = "Delete";

  // When button is clicked → remove note
  btn.onclick = function () {
    li.remove();
  };

  // Add button inside list item
  li.appendChild(btn);

  // Add list item to ul
  document.getElementById("notesList").appendChild(li);

  // Clear textarea after adding
  document.getElementById("note").value = "";
}
