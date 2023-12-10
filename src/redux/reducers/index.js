import { combineReducers } from 'redux'
import { productReducer } from './prodact-reducers'
import { cartReducer } from './cart-reducers'

const rootReducer = combineReducers({
    all_products: productReducer,
    cart_products: cartReducer
})

export default rootReducer