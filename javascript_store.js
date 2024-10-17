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
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}
    // Loop through each button and attach the event listener
    // Used for remove buttons
    for (let i = 0; i < remove_buttons.length; i++) {
        remove_buttons[i].addEventListener('click', remove_items);
    }

    // Adds add to cart button functionality
    function add_items(event) {

        // Finds button clicked
        const add_button_clicked = event.target

        // Access the container div for the row
        const row_div = document.querySelector('div.cart-row');

        // Add new item before div
        row_div.insertAdjacentHTML('beforebegin', '');



        // Add necessary content to the rows class for the new item
        cart_rows.innerHTML += 

        // Update cart total after addition of new item
        cartTotal()
    }

    function remove_items(event) {
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

        // Replace total value with the now calculated total price
        document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total.toFixed(2);
    }
});
