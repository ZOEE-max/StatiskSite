const mycategory = new URLSearchParams(window.location.search).get("category");
console.log("produktliste med category", mycategory);

const productlist = document.querySelector("product_list_container");
const overskrift = document.querySelector("h2");
overskrift.innerHTML = mycategory;

const listContainer = document.querySelector("main");
fetch(`https://kea-alt-del.dk/t7/api/products?category=${mycategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);

  const markup = products
    .map(
      (product) =>
        `<div class="product_list_container">
            <a href="produkt.html?id=${product.id}" class="product_card">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Produkt 1">
                <h3>${product.productdisplayname}</h3>
                <p>${product.price}</p>
            </div></a> `
    )

    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
