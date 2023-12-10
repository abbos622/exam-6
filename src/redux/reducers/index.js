import { combineReducers } from 'redux'
import { productReducer } from './prodact-reducers'
import { cartReducer } from './cart-reducers'
import { likeReducers } from './likeReducers'

const rootReducer = combineReducers({
    all_products: productReducer,
    cart_products: cartReducer,
    cart_like: likeReducers
})

export default rootReducer