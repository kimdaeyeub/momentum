const toggleTodoBtn = document.querySelector(".icon__btn");
const todoBox = document.querySelector(".todo__box");
const overlay = document.querySelector(".modal__overlay");
let openTodoModal = false;

function toggleTodo() {
  if (openTodoModal) {
    //모달 숨기기
    todoBox.classList.add("remove__modal");
    todoBox.classList.remove("modal__animation");
    setTimeout(() => todoBox.classList.add("hidden"), 300);
    overlay.classList.add("hidden");
  } else {
    //모달 보여주기
    todoBox.classList.remove("hidden");
    overlay.classList.remove("hidden");
    todoBox.classList.add("modal__animation");
    todoBox.classList.remove("remove__modal");
  }
  openTodoModal = !openTodoModal;
}

function onClickModalOverlay() {
  console.log("CLick!!");
  todoBox.classList.add("remove__modal");
  todoBox.classList.remove("modal__animation");
  setTimeout(() => todoBox.classList.add("hidden"), 300);
  overlay.classList.add("hidden");
}

overlay.addEventListener("click", onClickModalOverlay);
toggleTodoBtn.addEventListener("click", toggleTodo);
