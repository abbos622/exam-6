import { combineReducers } from 'redux'
import { productReducer } from './prodact-reducers'
import { cartReducer } from './cart-reducers'
import { likeReducers } from './likeReducers'
import { errorReducer } from './error-reducers'

const rootReducer = combineReducers({
    all_products: productReducer,
    cart_products: cartReducer,
    cart_like: likeReducers,
    error: errorReducer,
})

export default rootReducer