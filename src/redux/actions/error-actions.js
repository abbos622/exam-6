import axios from "../../api"

const error_products = (products) => {
    return {
        type: "ERROR_PRODUCTS",
        payload: {
            products
        }
    }
}


const errorProducts = (URL) => async dispatch => {
    axios(URL)
        .then(response => {
            dispatch(error_products(response.data))
        })
        .catch(err => console.error(err))

}

export { errorProducts }