const initialState = {
    cart_products: []
}

function checkDecrement(count) {
    if (count >= 1) {
        return count - 1
    }
    return count
}
const cartReducer = (state = initialState, action) => {
    console.log(action)
    const product_index = state.cart_products.findIndex(product => product.id === action.product.id)
    switch (action.type) {
        case "ADD_TO_CART":
            let newcart = state.cart_products;
            if (product_index === -1) {
                newcart = [...state.cart_products, action.product]
            }
            return {
                cart_products: newcart
            }

        case "INCREMENT_COUNT":
        case "DECREMENT_COUNT":
            let addedcart = state.cart_products.map((product, index) => {
                if (index === product_index) {
                    product.count = action.type === "INCREMENT_COUNT" ?
                        product.count + 1 : checkDecrement(product.count)
                }
                return product
            })

            addedcart = state.cart_products.filter(product => product.count > 0)
            return {
                cart_products: addedcart
            }
        case "REMOVE_FROM_CART":
            return state
        default:
            return state
    }
}

export { cartReducer }