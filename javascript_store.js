function cartTotal() {
    // Stores total value in future
    let total = 0

    // Access the cart class
    const cart_class = document.getElementsByClassName('cart-items')[0]

    // Access the cart rows
    const cart_rows = cart_class.getElementsByClassName('cart-row')

    // Have a loop continuously going to check for actions in relation to the cart section of the store page.
    // Also automatically will go through all elements as you'll see described in comments below
    for (i = 0; i < cart_rows.length; i++) {
        
        // Access each individual cart row in the cart-row class
        const cart_row = cart_rows[i]

        // Start on the first cart items price, the loop will ensure all rows get iterated through
        let cart_prices = cart_row.getElementsByClassName('cart-price')[0]

        // Access the items quantity input box, again starting with the first element as the loop will by nature check every element
        let quantity_box = cart_row.getElementsByClassName('cart-quantiy-input')[0]

        // Access the price of te item, and ensure to remove dollar sign for calcuation purposes
        let price_of_item = parseFloat(cart_prices.innerText.replace('$', ''))

        // Access the number within the input box
        let quantity = quantity_box.value

        // Calculate total value
        total = total + (price * quantity)
    }
    // Actually replace total with the new calculated value for it, and add dollar sign for visual purposes
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}