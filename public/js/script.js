const API_URL = "http://localhost:3000";
async function getProducts() {
  const res = await fetch(`${API_URL}/products`);
  const products = await res.json();
  const list = document.getElementById("products");
  list.innerHTML = "";

  products.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="${p.thumbnail}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <p><b>Price:</b> $${p.price}</p>
      <button onclick="saveForLater(${p.id})">Save For Later</button>
    `;
    list.appendChild(li);
  });
}

async function getSaveForLater() {
  const res = await fetch(`${API_URL}/saveforlater`);
  const items = await res.json();
  const list = document.getElementById("saveforlater");
  list.innerHTML = "";

  items.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="${p.thumbnail}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <p><b>Price:</b> $${p.price}</p>
    `;
    list.appendChild(li);
  });
}

async function saveForLater(id) {

  const res = await fetch(`${API_URL}/products/${id}`);
  const product = await res.json();

  await fetch(`${API_URL}/saveforlater`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product)
  });


  await fetch(`${API_URL}/products/${id}`, { method: "DELETE" });

  getProducts();
  getSaveForLater();
}

async function deleteAllProducts() {
  const res = await fetch(`${API_URL}/products`);
  const products = await res.json();

  for (let p of products) {
    await fetch(`${API_URL}/products/${p.id}`, { method: "DELETE" });
  }

  getProducts();
}
getProducts();
getSaveForLater();