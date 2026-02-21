const dropItem = document.querySelector(".drop-item");
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  box.addEventListener("drop", () => {
    box.appendChild(dropItem);
  });
});
