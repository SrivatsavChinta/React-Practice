let count = document.querySelector("span");

const increment = () => {
  count.innerText = Number(count.innerText) + 1;
};

const decrement = () => {
  count.innerText =
    Number(count.innerText) === 0 ? 0 : Number(count.innerText) - 1;
};

let plusButton = document.querySelector("#plus");
plusButton.addEventListener("click", increment);

let minusButton = document.querySelector("#minus");
minusButton.addEventListener("click", decrement);
