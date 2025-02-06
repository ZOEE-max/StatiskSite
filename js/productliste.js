const mycategory = new URLSearchParams(window.location.search).get("category");
console.log("produktliste med category", mycategory);

const productlist = document.querySelector("#product_list_container");
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
        `<a href="produkt.html?id=${product.id}" class="product_card 
          ${product.soldout && "out-of-stock"}">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}">
          <h3>${product.productdisplayname}</h3>
          
          <p class="price">
            ${product.discount > 0 ? `<span class="original-price">Pris: ${product.price} kr.</span>` : ""}
            ${product.discount > 0 ? `<span class="discounted-price">Pris: ${product.price - product.discount} kr.</span>` : `<span>Pris: ${product.price} kr.</span>`}
            ${product.discount > 0 ? `<span class="discount-tag">-${Math.round((product.discount / product.price) * 100)}%</span>` : ""}
          </p>
      </a>`
    )

    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
