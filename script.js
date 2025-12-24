async function loadProducts() {
  try {
    const response = await fetch('http://localhost:5000/api/products');
    const products = await response.json();
    const grid = document.querySelector('.grid');
    grid.innerHTML = products.map(p => `
      <div class="card">
        <img src="http://localhost:5000/images/${p.img}" alt="${p.name}">
        <div class="pad">
          <h3>${p.name}</h3>
          <div class="muted">${p.type}</div>
          <div class="price">KSh ${p.price}</div>
          <div class="mpesa">💬 <strong>Payment on Order:</strong> Pay via <strong>M-Pesa to 0796508569</strong>.</div>
          <p>
            <a class="btn" href="https://wa.me/254729218239?text=I'm interested in ${encodeURIComponent(p.name)}">Order on WhatsApp</a>
          </p>
        </div>
      </div>
    `).join('');
  } catch (err) {
    console.error("Could not load products:", err);
  }
}
window.onload = loadProducts;