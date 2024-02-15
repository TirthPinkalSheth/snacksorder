const snacks = [
  { name: 'Chips', price: 2.50 },
  { name: 'Cookies', price: 1.50 },
  { name: 'Candy Bar', price: 1.00 }
];

const snackContainer = document.getElementById('snackContainer');
const cartItems = [];

function displaySnacks() {
  snacks.forEach(snack => {
      const snackDiv = document.createElement('div');
      snackDiv.classList.add('snack');
      snackDiv.innerHTML = `
          <h3>${snack.name}</h3>
          <p>$${snack.price.toFixed(2)}</p>
          <button onclick="addToCart('${snack.name}', ${snack.price})">Add to Cart</button>
      `;
      snackContainer.appendChild(snackDiv);
  });
}

function addToCart(name, price) {
  cartItems.push({ name, price });
  updateCart();
}

function updateCart() {
  // Clear previous cart items
  document.getElementById('cartItems').innerHTML = '';

  // Display current cart items
  cartItems.forEach(item => {
      const cartItemDiv = document.createElement('div');
      cartItemDiv.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
      document.getElementById('cartItems').appendChild(cartItemDiv);
  });
}

function checkout() {
  // Store cart items in localStorage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  // Store total price in localStorage
  localStorage.setItem('totalPrice', totalPrice);
  // Redirect to checkout page
  window.location.href = 'checkout.html';
}

displaySnacks();
