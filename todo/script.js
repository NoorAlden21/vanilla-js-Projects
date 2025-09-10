const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.querySelector("button");

const addTask = function () {
  const text = inputBox.value.trim();
  if (text === "") {
    alert("you must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = text;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
};

const saveData = function () {
  localStorage.setItem("tasks", listContainer.innerHTML);
};

const loadData = function () {
  listContainer.innerHTML = localStorage.getItem("tasks");
};

addBtn.addEventListener("click", addTask);

inputBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

listContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    saveData();
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
    saveData();
  }
});

loadData();
