// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
// variables found in html doc

const submit = document.querySelector('#sizePicker [type="submit"]');
document;
const table = document.querySelector("#pixelCanvas");
const cp = document.querySelector("#colorPicker");

function makeGrid() {
// Your code goes here!
// code for Height and Width for Grid Size that user selects
  table.innerHTML=""
  const height = document.querySelector("#inputHeight").value;
  const width = document.querySelector("#inputWidth").value;
// code to make the _N_ by _M_ Grid using tr and td
  for (let row = 0; row < height; row++) {
    tr = document.createElement("tr");
    for (let col = 0; col < width; col++) {
      td = document.createElement("td");
      tr.insertAdjacentElement("afterbegin",td)
    }
    table.insertAdjacentElement("afterbegin",tr)
  }
}
// Add Event Listener & preventDefault so page won't reload
submit.addEventListener("click", (makeGrid));
submit.addEventListener("click", function (event){
  event.preventDefault();
});

//enter.addEventListener("click", makeGrid);
table.addEventListener("click", function (evt) {
  if (evt.target.tagName === "TD") {
    var cp = document.querySelector("#colorPicker").value;
    evt.target.style.backgroundColor = cp;
  }
});
