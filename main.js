
var products = [
  { name: "Wireless Headphones", price: 59.99, icon: "🎧" },
  { name: "Smart Watch", price: 89.99, icon: "⌚" },
  { name: "Running Shoes", price: 49.99, icon: "👟" },
  { name: "Backpack", price: 34.99, icon: "🎒" },
  { name: "Sunglasses", price: 19.99, icon: "🕶️" },
  { name: "Coffee Mug", price: 9.99, icon: "☕" }
];

var cartCount = 0;
var grid = document.getElementById("productGrid");


for (var i = 0; i < products.length; i++) {
  var p = products[i];
  var card = document.createElement("div");
  card.className = "product";
  card.innerHTML =
    '<div class="img">' + p.icon + '</div>' +
    '<h3>' + p.name + '</h3>' +
    '<p class="price">$' + p.price.toFixed(2) + '</p>' +
    '<button class="addBtn">Add to Cart</button>';
  grid.appendChild(card);
}


var buttons = document.getElementsByClassName("addBtn");
for (var j = 0; j < buttons.length; j++) {
  buttons[j].addEventListener("click", function () {
    cartCount++;
    document.getElementById("cartCount").textContent = cartCount;
  });
}


document.getElementById("shopBtn").addEventListener("click", function () {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
});


document.getElementById("offerForm").addEventListener("submit", function (event) {
  event.preventDefault();
  document.getElementById("offerMsg").textContent = "Thanks for subscribing! Check your email for your code.";
  this.reset();
});
