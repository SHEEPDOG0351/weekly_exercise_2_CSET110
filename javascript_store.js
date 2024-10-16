
//Ensures the body loads first in the html before the javascript
document.addEventListener('DOMContentLoaded', function () {
    // Select all buttons with class 'btn-danger' (the remove buttons)
    const remove_buttons = document.getElementsByClassName('btn-danger');

    // Loop through each button and attach the event listener
    for (let i = 0; i < remove_buttons.length; i++) {
        remove_buttons[i].addEventListener('click', remove_items);
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
