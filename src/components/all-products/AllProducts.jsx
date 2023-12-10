import React, { useEffect, useState } from "react";
import { loadProducts } from "../../redux/actions/prodact-actions";
import { connect, useSelector } from "react-redux";
import { Container } from "../../utils/index";
import { Link } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import "./AllProducts.scss";

const AllProducts = (props) => {
  const data = useSelector((state) => state.all_products);
  const [number, setNumber] = useState(10);

  const handleNum = (e) => {
    if (data.all_products.length > number) {
      setNumber(number + 10);
    }
  };

  const handleLike = (product) => {
    console.log(product);
  };

  const handleCart = (product) => {
    console.log(product);
  };

  console.log(data);
  useEffect(() => {
    props.loadProducts("/products.json");
  }, []);
  return (
    <Container>
      <div className="all-products">
        {data.all_products
          .filter((k) => k.name.includes(""))
          .slice(0, number)
          .map((data) => (
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
                  <button onClick={()=>handleLike(data.name)}>
                    <FaRegHeart />
                  </button>
                  <button onClick={()=>handleCart(data.name)}>
                    <IoCartSharp />
                  </button>
                </div>
              </div>
            </div>
          ))}

        <button className="more-btn" onClick={handleNum}>
          More Product🔽
        </button>
      </div>
    </Container>
  );
};

export default connect(null, { loadProducts })(AllProducts);
