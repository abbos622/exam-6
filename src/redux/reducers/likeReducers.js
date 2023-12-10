const initialState = {
    cart_like: [],
    isLoading: true
}


const likeReducers = (state = initialState, action) => {
    const product_index = state.cart_like.findIndex(product => product.id === action.product.id)
    switch (action.type) {
        case "LIKE_CART":
            let newcart = state.cart_like;
            if (product_index === -1) {
                console.log(state);
                newcart = [...state.cart_like, action.product]
            }
            return {
                cart_like: newcart,
                isLoading: false
            }

        case "REMUVE_LIKE":
            console.log(state.cart_like);
            let newLike = state.cart_like.filter(like => like.id !== action.product.id)
            return {
                cart_like: newLike,
                isLoading: false
            }
        default:
            return state
    }
}

export { likeReducers }