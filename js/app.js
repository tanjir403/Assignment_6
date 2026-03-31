const products = [
  { id: 1, name: "Resume Builder", price: 15, icon: "📄" },
  { id: 2, name: "Portfolio Generator", price: 25, icon: "💼" },
  { id: 3, name: "Job Tracker", price: 10, icon: "📊" }
];

let cart = [];

const productsDiv = document.getElementById("products");
const cartDiv = document.getElementById("cart");

function showProducts() {
  productsDiv.classList.remove("hidden");
  cartDiv.classList.add("hidden");
}

function showCart() {
  productsDiv.classList.add("hidden");
  cartDiv.classList.remove("hidden");
  renderCart();
}

function renderProducts() {
  productsDiv.innerHTML = "";

  products.forEach(p => {
    productsDiv.innerHTML += `
      <div class="bg-white p-5 rounded shadow">
        <h2 class="font-bold">${p.icon} ${p.name}</h2>
        <p class="text-xl">$${p.price}</p>
        <button onclick="addToCart(${p.id})"
          class="btn btn-primary w-full mt-3">
          Buy Now
        </button>
      </div>
    `;
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCount();
}

function updateCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

function renderCart() {
  const container = document.getElementById("cart-items");
  const empty = document.getElementById("empty");
  const totalEl = document.getElementById("total");

  container.innerHTML = "";

  if (cart.length === 0) {
    empty.style.display = "block";
    totalEl.innerText = "";
    return;
  }

  empty.style.display = "none";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    container.innerHTML += `
      <div class="flex justify-between items-center bg-white p-3 rounded mb-2">
        <span>${item.icon} ${item.name}</span>
        <button onclick="removeItem(${index})" class="btn btn-sm btn-error">
          Remove
        </button>
      </div>
    `;
  });

  totalEl.innerText = "Total: $" + total;
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
  updateCount();
}

function checkout() {
  cart = [];
  renderCart();
  updateCount();
}

renderProducts();