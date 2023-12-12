const initialState = {
    single_products: [],
    isLoading: true
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SINGLE_PRODUCTS":
            return {
                single_products: action.payload.products,
                isLoading: false
            }
        default:
            return state
    }
}

export { productReducer }