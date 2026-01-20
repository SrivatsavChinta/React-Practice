import { randomNames } from "./random-names.js";

const listElement = document.getElementById("list");
const searchInput = document.getElementById("search");

function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function renderList(names, query = "") {
  listElement.innerHTML = "";

  if (names.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No results found";
    listElement.appendChild(li);
    return;
  }

  const fragment = document.createDocumentFragment();
  const regex = query ? new RegExp(`(${query})`, "ig") : null;

  names.forEach((name) => {
    const li = document.createElement("li");

    if (regex) {
      li.innerHTML = name.replace(regex, "<mark>$1</mark>");
    } else {
      li.textContent = name;
    }

    fragment.appendChild(li);
  });

  listElement.appendChild(fragment);
}

function handleSearch(event) {
  const query = event.target.value.trim().toLowerCase();

  const filteredNames = randomNames.filter((name) =>
    name.toLowerCase().includes(query),
  );

  renderList(filteredNames, query);
}

searchInput.addEventListener("input", debounce(handleSearch, 300));

renderList(randomNames);
