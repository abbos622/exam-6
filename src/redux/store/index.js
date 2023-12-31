import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "../reducers";

import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage"
import { likeReducers } from "../reducers/likeReducers";

const persistConfig = {
    key: 'rducer',
    storage: storage,
    whitelist: ["cart_products", "cart_like", "all_products", "error"]
}

const presistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(presistedReducer, applyMiddleware(thunk));
persistStore(store)

export { store }