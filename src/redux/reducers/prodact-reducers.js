const initialState = {
    all_products: [],
    isLoading: true
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_PRODUCTS":
            return {
                all_products: action.payload.products,
                isLoading: false
            }
        default:
            return state
    }
}

export { productReducer }