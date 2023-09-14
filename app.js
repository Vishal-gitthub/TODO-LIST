// Get references to HTML elements by their IDs
let inputBox = document.getElementById("taskInp");
let storedTodo = document.getElementById("storedTodo");

// Function to add a new todo item
function add() {
  // Check if the input field is empty
  if (inputBox.value === "") {
    alert("must write something");
  } else {
    // Create a new div element to store the todo item
    let storedData = document.createElement("div");
    storedData.classList.add("storedTodo"); // Add a CSS class to the div

    // Create a checkbox element
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox"; // Set the input type to checkbox
    checkbox.classList.add("checkbox"); // Add a CSS class to the checkbox

    // Create a paragraph element to display the todo text
    let texts = document.createElement("p");
    texts.classList.add("todoText"); // Add a CSS class to the text
    texts.innerHTML = inputBox.value; // Set the text content to the input value

    // Create a delete (dlt) icon
    let dlt = document.createElement("img");
    dlt.src = "DeleteLogo.png"; // Set the image source
    dlt.classList.add("dlt-icon"); // Add a CSS class to the delete icon

    // Append the elements to the storedTodo container
    storedTodo.appendChild(storedData);
    storedData.appendChild(checkbox);
    storedData.appendChild(texts);
    storedData.appendChild(dlt);

    // Add an event listener to the checkbox for a line-through effect
    checkbox.addEventListener("click", function () {
      if (checkbox.checked) {
        texts.style.textDecoration = "line-through"; // Apply line-through style when checked
        texts.style.opacity = "20%"; // Reduce opacity when checked
      } else {
        texts.style.textDecoration = "none"; // Remove line-through style when unchecked
        texts.style.opacity = "100%"; // Restore full opacity when unchecked
      }
    });
    dlt.addEventListener("click", function () {
      storedData.remove();
      saveData() 
    });
    // Clear the input field
    inputBox.value = "";
    saveData()
  }
}



function saveData() {
  let tasks = Array.from(document.querySelectorAll(".storedTodo")).map((task) => task.innerHTML);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function showData() {
  let savedTasks = JSON.parse(localStorage.getItem("tasks"));

  if (savedTasks) {
    storedTodo.innerHTML = savedTasks.join("");
  }
}

showData();

