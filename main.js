function darkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
function hoverOn() {
  document.getElementById("lightIcon").src = "pink_light-removebg-preview.png";
}
function hoverOff() {
  document.getElementById("lightIcon").src = "purple_light-removebg-preview.png";
}
function homeHoverOn() {
    document.getElementById("homeIcon").src = "pink_logo-removebg-preview.png";
}
  function homeHoverOff() {
    document.getElementById("homeIcon").src = "logo bg removed.png";
}
function addToCart(productName) {
  var cart = JSON.parse(localStorage.getItem("cart")) || [];
  var found = false;

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].name === productName) {
      cart[i].quantity = cart[i].quantity + 1;
      found = true;
      break;
    }
  }

  if (!found) {
    cart.push({ name: productName, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(productName + " added to cart!");
}

function getCartItems() {
  var cart = JSON.parse(localStorage.getItem("cart"));
  if (cart) {
    return cart;
  } else {
    return [];
  }
}

function removeFromCart(productName) {
  var cart = getCartItems();
  var newCart = [];

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].name !== productName) {
      newCart.push(cart[i]);
    }
  }

  localStorage.setItem("cart", JSON.stringify(newCart));
  displayCart();
}

function displayCart() {
  var cartItems = getCartItems();
  var cartDiv = document.getElementById("cart-container");

  cartDiv.innerHTML = "";

  if (cartItems.length === 0) {
    cartDiv.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];
    var itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML =
      "<h3>" + item.name + "</h3>" +
      "<p>Quantity: " + item.quantity + "</p>" +
      "<button onclick=\"removeFromCart('" + item.name + "')\">Remove</button>" +
      "<hr>";
    cartDiv.appendChild(itemDiv);
  }
}

displayCart();