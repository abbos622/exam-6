import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "../../utils/index";
import { Link } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import Nav from "../../layouts/nav/Nav";

const Liked = () => {
  const dispaatch = useDispatch();
  const data = useSelector((state) => state.cart_like);

  const handleRemuveLike = (product) => {
    console.log("hello");
    dispaatch({ type: "REMUVE_LIKE", product });
  };

  return (
    <div>
      <Nav />

      <Container>
        <h1 className="cart-title">Like</h1>
        <div className="all-products">
          {data.cart_like.map((data) => (
            <div className="all__product-card" key={data.id}>
              <Link to={`/${data.id}`} className="all__product-img">
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
                  <button onClick={() => handleRemuveLike(data)} className= "like-true">
                    <FaHeart />
                  </button>
                  <button>
                    <IoCartSharp />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Liked;
