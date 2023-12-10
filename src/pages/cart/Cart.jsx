import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../layouts/header/Header";
import { Container } from "../../utils/index";
import { Link } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Nav from "../../layouts/nav/Nav";

const Cart = () => {
  const dataCard = useSelector((state) => state.cart_products);
  let totalPrice = dataCard.cart_products
    .map((product) => (product.price ? +product.price*product.count : 0))
    .reduce((a, b) => a + b, 0);

    const handleIncrementProductCount = (product) => {
      dispaatch({type:  "INCREMENT_COUNT", product})
  }
  
  const handleDecrimentProductCount = (product) => {
      dispaatch({type:  "DECREMENT_COUNT", product})
  }

    const dispaatch = useDispatch();
  return (

    <div>
      <Nav />

      <h1 className="cart-title">Cart</h1>
      <div className="total">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
      </div>
      <div className="all-products">
        {dataCard.cart_products.map((data) => (
          <div className="all__product-card" key={data.id}>
            <Link to={`/products/${data.id}`} className="all__product-img">
              <img width={200} src={data.api_featured_image} alt="" />
            </Link>
            <div className="all-products-text">
              <h2>
                {data.name.length > 26
                  ? data.name.slice(0, 26) + "..."
                  : data.name}
              </h2>
              <strong>
                {data.price_sign} {data.price ? data.price : "Free"}
              </strong>
              <div className="all__products-div">
                  <button onClick={()=> handleDecrimentProductCount(data)}>-</button>
                <span>
                  {
                    dataCard.cart_products.find((cartProduct) => cartProduct.id === data.id ).count
                    }
                </span>
                    <button onClick={() => handleIncrementProductCount(data)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default Cart;
