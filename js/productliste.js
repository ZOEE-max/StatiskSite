const listContainer = document.querySelector("main");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  let markup = "";
  products
    .map((product) => {
      markup += `<div class="product_list_container">

            <a href="produkt.html" class="product_card out-of-stock">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Produkt 1">
                <h3>${product.productdisplayname}</h3>
                <p>${product.price}</p>
            </div></a> `;
    })

    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
