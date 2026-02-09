document.addEventListener("change", (e) => {
  const checkbox = e.target;
  topDown(checkbox);
  bottomUp(checkbox);
});

function topDown(checkbox) {
  const parent = checkbox.closest(".level");
  const children = parent.querySelectorAll(".level");
  children.forEach((child) => {
    child.querySelector(".checkbox").checked = checkbox.checked;
  });
}

function bottomUp(checkbox) {
  let allChildrenChecked = true;
  const currentLevel = checkbox.closest(".level");
  const parentLevel = currentLevel.parentElement.closest(".level");
  if (!parentLevel) return;
  const children = parentLevel.querySelectorAll(".level");
  children.forEach((child) => {
    const childCheckbox = child.querySelector(".checkbox");
    if (childCheckbox.checked === false) allChildrenChecked = false;
  });

  const parentCheckbox = parentLevel.querySelector(".checkbox");
  parentCheckbox.checked = allChildrenChecked;

  bottomUp(parentCheckbox);
}
