// Retrieve cart items from localStorage
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];



const checkoutContainer = document.getElementById('checkoutContainer');
const totalPriceContainer = document.getElementById('totalPrice');

function displayCheckoutItems() {
    // Retrieve cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartItems.forEach(item => {
        const checkoutItemDiv = document.createElement('div');
        checkoutItemDiv.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
        checkoutContainer.appendChild(checkoutItemDiv);
    });

    // Retrieve total price from localStorage
    const totalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0;
    totalPriceContainer.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

function confirmOrder() {
    // Implement your order confirmation logic here
    alert('Order confirmed! Thank you for your purchase.');
    // Clear cart and total price after confirming order
    localStorage.removeItem('cartItems');
    localStorage.removeItem('totalPrice');
    // Redirect to homepage
    window.location.href = 'index.html';
}

displayCheckoutItems();
