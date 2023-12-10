 import axios from "../../api"

 const load_products = (products) => {
     return {
         type: "LOAD_PRODUCTS",
         payload: {
             products
         }
     }
 }


 const loadProducts = (URL) => async dispatch => {
     axios(URL)
         .then(response => {
             dispatch(load_products(response.data))
         })
         .catch(err => console.log(err))
 }

 export { loadProducts }