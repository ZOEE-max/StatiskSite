let productId = 1590;
let productContainer = document.querySelector(".product-detail");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
    <div class="product-image">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="Produkt 2">
            </div>

            <div class="product-info">
                <h2> ${data.productdisplayname}</h2>
         <p class="product-description"> ${data.description}</p>

                <p class="price"> ${data.price}</p>

                <div class="size-selection">
                    <label for="size">Vælg størrelse:</label>
                    <select id="size">
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                    </select>
                </div>

                <button class="add-to-cart">Læg i kurv</button>
            </div>
    
    `;
  });
