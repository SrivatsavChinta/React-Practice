const dropItem = document.querySelector(".drop-item");
const boxes = document.querySelectorAll(".box");

let draggedItem = null;

dropItem.addEventListener("dragstart", (e) => {
  draggedItem = e.target;
});

boxes.forEach((box) => {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  box.addEventListener("drop", (e) => {
    e.preventDefault();
    if (draggedItem) {
      box.appendChild(draggedItem);
    }
  });
});
