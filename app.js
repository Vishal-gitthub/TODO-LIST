let inputBox = document.getElementById("taskInp");
let storedTodo = document.getElementById("storedTodo");

function add() {
  if (inputBox.value === "") {
    alert("must write something");
  } else {
    let storedData = document.createElement("div");
    storedData.classList.add("storedTodo");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");

    let texts = document.createElement("p");
    texts.classList.add("todoText");
    texts.innerHTML = inputBox.value;

    storedTodo.appendChild(storedData);
    storedData.appendChild(checkbox);
    storedData.appendChild(texts);



// addEventListener for line through effect

    checkbox.addEventListener("click", function () {
      if (checkbox.checked) {
        texts.style.textDecoration = "line-through";
        texts.style.opacity='20%'
      } else {
        texts.style.textDecoration = "none";
        texts.style.opacity="100%"
      }
    });



  }
}
