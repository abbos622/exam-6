import { Routes, Route } from "react-router-dom"
import Home from "./home/Home"
import Cart from "../pages/cart/Cart"
import Liked from "../pages/liked/Liked"
import SingleProduct from "../pages/single-product/SingleProduct"
import SingleCategory from "../pages/single-category/SingleCategory"
const RouteController = () => {
  return (
    <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/liked" element={<Liked/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/products/:id" element={<SingleProduct/>}/>
        <Route path="/:url" element={<SingleCategory/>}/>
    </Routes>
  )
}

export default RouteController