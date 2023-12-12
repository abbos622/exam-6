import axios from "../../api"

const single_products = (products) => {
    return {
        type: "SINGLE_PRODUCTS",
        payload: {
            products
        }
    }
}


const singleProducts = (URL) => async dispatch => {
    axios(URL)
        .then(response => {
            dispatch(single_products(response.data))
        })
        .catch(err => console.error(err))

}

export { singleProducts }