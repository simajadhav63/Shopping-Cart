document.addEventListener("DOMContentLoaded", function() {
  const productItems = document.querySelectorAll('.product-item');
  const cartItems = document.querySelector('.cart-items');
  const totalElement = document.querySelector('.total');
  let total = 0;

  productItems.forEach(item => {
      const addToCartBtn = item.querySelector('.add-to-cart');
      const removeFromCartBtn = item.querySelector('.remove-from-cart');
      const quantitySpan = item.querySelector('.quantity');
      const productName = item.querySelector('span').textContent.split(' - ')[0];
      const productPrice = parseInt(item.querySelector('span').textContent.split(' - ')[1].replace('₹', '')); // Change the currency symbol

      addToCartBtn.addEventListener('click', () => {
          const quantity = parseInt(quantitySpan.textContent) + 1;
          quantitySpan.textContent = quantity;

          const cartItem = document.createElement('div');
          cartItem.classList.add('cart-item');
          cartItem.dataset.productId = item.dataset.productId;
          cartItem.textContent = `${productName} - ₹${productPrice} x ${quantity}`; // Change the currency symbol

          const existingCartItem = cartItems.querySelector(`[data-product-id="${item.dataset.productId}"]`);
          if (existingCartItem) {
              cartItems.removeChild(existingCartItem);
          }

          cartItems.appendChild(cartItem);

          total += productPrice;
          totalElement.textContent = `Total: ₹${total}`; // Change the currency symbol
      });

    
    });
});
