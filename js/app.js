console.log("app.js loaded");
console.log(products);

let cart = [];

// products দেখানোর div
const productsContainer = document.getElementById("products-container");

// products section
const productsSection = document.getElementById("products-section");

// cart section
const cartSection = document.getElementById("cart-section");

// navbar count
const cartCount = document.getElementById("cart-count");

// cart list
const cartItems = document.getElementById("cart-items");

// empty cart message
const emptyCartMessage = document.getElementById("empty-cart-message");

// total
const cartTotal = document.getElementById("cart-total");

// summary box
const cartSummary = document.getElementById("cart-summary");


// এই function tag color set করবে
function getTagClass(tagType) {
  if (tagType === "orange") {
    return "bg-orange-100 text-orange-600";
  }

  if (tagType === "purple") {
    return "bg-purple-100 text-purple-600";
  }

  if (tagType === "green") {
    return "bg-green-100 text-green-600";
  }

  if (tagType === "yellow") {
    return "bg-yellow-100 text-yellow-700";
  }

  return "bg-gray-100 text-gray-600";
}


// সব product render করবে
function renderProducts() {
  productsContainer.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    const productCard = document.createElement("div");
    productCard.className =
      "bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 h-full flex flex-col";

    productCard.innerHTML = `
      <div class="flex items-center justify-between mb-4">
        <img src="${product.icon}" alt="${product.name}" class="w-14 h-14 object-contain" />
        <span class="text-xs font-semibold px-3 py-1 rounded-full ${getTagClass(product.tagType)}">
          ${product.tag}
        </span>
      </div>

      <h3 class="text-xl font-bold">${product.name}</h3>

      <p class="text-sm text-gray-500 mt-3 leading-6 flex-grow">
        ${product.description}
      </p>

      <div class="mt-5">
        <p class="text-3xl font-bold">$${product.price}</p>
        <p class="text-sm text-gray-400 mt-1">/${product.period}</p>
      </div>

      <ul class="mt-5 text-sm space-y-2 text-gray-700">
        <li>✔ ${product.features[0]}</li>
        <li>✔ ${product.features[1]}</li>
        <li>✔ ${product.features[2]}</li>
      </ul>

      <button onclick="addToCart(${product.id})" class="btn mt-6 w-full rounded-full bg-purple-600 text-white border-none hover:bg-purple-700">
        Buy Now
      </button>
    `;

    productsContainer.appendChild(productCard);
  }
}


// cart এ product add করবে
function addToCart(productId) {
  const selectedProduct = products.find(function(product) {
    return product.id === productId;
  });

  cart.push(selectedProduct);
  updateCartCount();
}


// navbar এর count update করবে
function updateCartCount() {
  cartCount.innerText = cart.length;
}


// product section দেখাবে
function showProducts() {
  productsSection.classList.remove("hidden");
  cartSection.classList.add("hidden");
}


// cart section দেখাবে
function showCart() {
  productsSection.classList.add("hidden");
  cartSection.classList.remove("hidden");
  renderCart();
}


// cart render করবে
function renderCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    emptyCartMessage.classList.remove("hidden");
    cartSummary.classList.add("hidden");
    return;
  }

  emptyCartMessage.classList.add("hidden");
  cartSummary.classList.remove("hidden");

  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    total = total + item.price;

    const cartCard = document.createElement("div");
    cartCard.className =
      "bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between";

    cartCard.innerHTML = `
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center">
          <img src="${item.icon}" alt="${item.name}" class="w-8 h-8 object-contain" />
        </div>

        <div>
          <h3 class="font-bold">${item.name}</h3>
          <p class="text-sm text-gray-500">$${item.price} /${item.period}</p>
        </div>
      </div>

      <button onclick="removeFromCart(${i})" class="btn btn-sm btn-outline text-red-500 border-red-300 rounded-full px-4">
        Remove
      </button>
    `;

    cartItems.appendChild(cartCard);
  }

  cartTotal.innerText = `$${total}`;
}


// cart থেকে item remove করবে
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartCount();
  renderCart();
}


// checkout করলে cart empty হবে
function checkout() {
  cart = [];
  updateCartCount();
  renderCart();
}


// page load হলে product show হবে
renderProducts();