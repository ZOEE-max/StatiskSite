const categoryContainer = document.querySelector("ul");

fetch(`https://kea-alt-del.dk/t7/api/categories/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(categories) {
  console.log(categories);

  const markup = categories
    .map((category) => `<li> <a href="produktliste.html?" class="category">${category.category}</a></li>`)

    .join("");
  console.log(markup);
  categoryContainer.innerHTML = markup;
}
