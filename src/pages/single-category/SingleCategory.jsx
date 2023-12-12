import React, { useEffect, useState } from "react";
import { loadProducts } from "../../redux/actions/prodact-actions";
import { errorProducts } from "../../redux/actions/error-actions";
import { connect, useSelector } from "react-redux";
import { Container } from "../../utils";
import { Link } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom/dist";
import Header from "../../layouts/header/Header";

const SingleCategory = (props) => {
  const data = useSelector((state) => state.error);
  console.log(data.all_products);

  const {url} = useParams();
  console.log(url);

  const dispaatch = useDispatch();

  const likeData = useSelector((state) => state.cart_like);
  const {cart_products} = useSelector((state) => state.cart_products);

  console.log(cart_products);

  const handleLike = (product) => {
    dispaatch({ type: "LIKE_CART", product });
  };

  const handleCart = (product) => {
    product.count = 1;
    dispaatch({ type: "ADD_TO_CART", product });
  };

  useEffect(() => {
    props.errorProducts(`products.json?${url}`);
  }, [url]);
  console.log(data.all_products);
  return (
    <>
      <Header/>
        <Container>
          <div className="all-products">
            {data?.all_products?.map((data) => (
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
                    <button
                      onClick={() => handleLike(data)}
                      className={
                        likeData.cart_like.findIndex(
                          (product) => product.id === data.id
                        ) !== -1
                          ? "like-true"
                          : ""
                      }
                    >
                      <FaHeart />
                    </button>
                    <button onClick={() => handleCart(data)} >
                      <IoCartSharp />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
    </>
  );
};

export default connect(null, { errorProducts })(SingleCategory);
