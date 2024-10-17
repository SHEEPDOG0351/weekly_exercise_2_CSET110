if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function ready(){
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItemButtons)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    cartTotal()     
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    cartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemsNames = cartItems.getElementsByClassName('cart-item-title')
    for (i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText === title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
        cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}
    // Loop through each button and attach the event listener
    // Used for remove buttons
    for (let i = 0; i < remove_buttons.length; i++) {
        remove_buttons[i].addEventListener('click', remove_items);
    }

    function removeCartItem(event) {
        // Find the button that was clicked
        const button_clicked = event.target;

        // Remove the cart row by accessing the grandparent element (the row)
        button_clicked.parentElement.parentElement.remove();

        // Update the cart total after the removal
        cartTotal();
    }

    function cartTotal() {
        let total = 0;
        const cart_class = document.getElementsByClassName('cart-items')[0];
        const cart_rows = cart_class.getElementsByClassName('cart-row');

        for (let i = 0; i < cart_rows.length; i++) {
            // Access each individual row
            const cart_row = cart_rows[i];

            // Access the cart price class
            const cart_prices = cart_row.getElementsByClassName('cart-price')[0];

            // Access the input box associated with the cart quantity so we can grab the numerical value associated with the items quantity later
            const quantity_box = cart_row.getElementsByClassName('cart-quantity-input')[0];

            // Get price of item, and remove the dollar sign from it so we can convert the string to a float for calculation purposes
            const price_of_item = parseFloat(cart_prices.innerText.replace('$', ''));

            // Get the numerical value inside the quantity box as discussed earlier
            const quantity = quantity_box.value;

            // Perform calculation for total
            total += price_of_item * quantity;
        }
        total = Math.round(total * 100) / 100

        // Replace total value with the now calculated total price
        document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total.toFixed(2);
    }
