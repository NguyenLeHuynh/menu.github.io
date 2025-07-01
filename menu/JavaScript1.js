const menu = [
    { id: 1, name: "Matcha Latte", price: 28, category: "matcha" },
    { id: 2, name: "Matcha Macchiato", price: 36, category: "matcha" },
    { id: 3, name: "Phê sữa", price: 22, category: "coffee" },
    { id: 4, name: "Bạc sỉu kem sữa", price: 30, category: "coffee" },
    { id: 5, name: "Trà vải Việt quất", price: 30, category: "tea" },
    { id: 6, name: "Ổi hồng dâu bưởi", price: 28, category: "tea" },
    { id: 7, name: "Thạch củ năng", price: 5, category: "topping" },
    { id: 8, name: "Trân châu trắng", price: 5, category: "topping" },
];

let cart = [];

function renderMenu(items) {
    const container = document.getElementById("menuContainer");
    container.innerHTML = "";
    items.forEach(item => {
        const div = document.createElement("div");
        div.className = "menu-item";
        div.innerHTML = `
      <h3>${item.name}</h3>
      <p><b>${item.price}k</b></p>
      <button onclick="addToCart(${item.id})">Thêm</button>
    `;
        container.appendChild(div);
    });
}

function filterItems(category) {
    const filtered = category === "all" ? menu : menu.filter(i => i.category === category);
    renderMenu(filtered);
}

function addToCart(id) {
    const item = menu.find(i => i.id === id);
    cart.push(item);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cartList");
    const total = document.getElementById("totalPrice");
    cartList.innerHTML = "";
    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.price;
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price}k`;
        cartList.appendChild(li);
    });
    total.textContent = totalPrice;
}

document.getElementById("searchBox").addEventListener("input", function () {
    const keyword = this.value.toLowerCase();
    const filtered = menu.filter(i => i.name.toLowerCase().includes(keyword));
    renderMenu(filtered);
});

window.onload = () => {
    renderMenu(menu);
};
{
    <h1>
        Tiệm Nhà Táo
    </h1>
}