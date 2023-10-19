const toggleTodoBtn = document.querySelector(".toggle__todo");
const todoBox = document.querySelector(".todo__box");
let openTodoModal = false;

toggleTodoBtn.addEventListener("click", toggleTodo);

function toggleTodo() {
  if (openTodoModal) {
    todoBox.classList.add("remove__modal");
    todoBox.classList.remove("modal__animation");
    setTimeout(() => todoBox.classList.add("hidden"), 1000);
    console.log("hidden");
  } else {
    todoBox.classList.remove("hidden");
    todoBox.classList.add("modal__animation");
    todoBox.classList.remove("remove__modal");
    console.log("No");
  }
  openTodoModal = !openTodoModal;
}
