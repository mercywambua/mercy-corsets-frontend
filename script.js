// ===============================
// BACKEND BASE URL (Render)
// ===============================
const API_BASE_URL = "https://mercy-corsets-backend.onrender.com";

// ===============================
// Example: Fetch products
// ===============================
async function loadProducts() {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    const products = await response.json();

    const container = document.getElementById("products");
    container.innerHTML = "";

    products.forEach(product => {
      const item = document.createElement("div");
      item.className = "product";

      item.innerHTML = `
        <img src="${API_BASE_URL}/${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>KES ${product.price}</p>
      `;

      container.appendChild(item);
    });

  } catch (error) {
    console.error("Error loading products:", error);
  }
}

// ===============================
// Load products when page loads
// ===============================
document.addEventListener("DOMContentLoaded", loadProducts);
