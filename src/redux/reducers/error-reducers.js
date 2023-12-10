const initialState = {
    all_products: [],
    isLoading: true
}

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ERROR_PRODUCTS":
            return {
                all_products: action.payload.products,
                isLoading: false
            }
        default:
            return state
    }
}

export { errorReducer }