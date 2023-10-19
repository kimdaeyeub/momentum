const addTodoBtn = document.querySelector(".todo__add__btn");
const input = document.querySelector(".todo__input");
const body = document.querySelector(".todo__body");

let todos = [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteToDo(event) {
  const div = event.target.parentElement;
  console.log(div);
  div.remove();
  todos = todos.filter((toDo) => toDo.id !== parseInt(div.id));
  saveTodos();
}

function paintToDo(newTodo) {
  const div = document.createElement("div");
  div.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.todo;
  const icon = document.createElement("i");
  icon.classList.add("fa-solid");
  icon.classList.add("fa-x");
  icon.addEventListener("click", deleteToDo);
  div.appendChild(span);
  div.appendChild(icon);
  div.classList.add("todo__list");
  body.appendChild(div);
}

//할 일 추가
function onClickAddBtn() {
  const newTodo = input.value;
  if (newTodo !== "") {
    const newTodoData = {
      todo: newTodo,
      id: Date.now(),
    };
    todos.push(newTodoData);
    input.value = "";
    paintToDo(newTodoData);
    saveTodos();
  }
}

addTodoBtn.addEventListener("click", onClickAddBtn);

const savedToDos = localStorage.getItem("todos");

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  todos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
