console.log("hello");


const notesPreview = document.getElementsByClassName('notes-preview')[0]

const notesArr = [];
const input1 = document.getElementById("input-box");
const input2 = document.getElementById("input-box2");
const submit = document.getElementById("submit-button");
submit.addEventListener("submit", function (e) {
  e.preventDefault();

  notesArr.push(input1.value, input2.value);

  showNotes();
});

function showNotes() {
  notesPreview.innerHTML = '';


  for (let a = 0; a < notesArr.length; a++) {
    const tag = document.createElement("div");
    const text = document.createTextNode(notesArr[a]);
    tag.append(text);
    notesPreview.appendChild(tag);
    tag.classList.add("box");
  }
}
