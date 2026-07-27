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

