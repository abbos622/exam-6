import React, { useEffect } from "react";
import Header from "../../layouts/header/Header";
// import { loadProducts } from "../../redux/actions/prodact-actions";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import parse from "html-react-parser";
import "./singleProduct.scss";
import { Container } from "../../utils";
import { errorProducts } from "../../redux/actions/error-actions";

const SingleProduct = (props) => {
  const { id } = useParams();
  const data = useSelector((state) => state.all_products);
  const product = data.all_products;
  console.log(product);

  useEffect(() => {
    props.errorProducts(`/products/${id}.json`);
  }, []);

 return (
    <div>
      <Header />
        <div className="single-product">
          <Container>
            <div className="single-card">
              <div className="single__img">
                <img width={500} height={200} src={product?.api_featured_image} alt=""/>
              </div>
              <div className="">
              <div className="single-title">
              <h2>{product.name}</h2>
              <strong className="brand">{product?.brand}</strong>
              </div>
              <strong className="single-price">
                {product.price_sign} {product?.price}
              </strong>
              <p>{product.description}</p>
              </div>
            </div>
          </Container>
        </div> 
        : 
        <div></div>
    </div>
  ) 
};

export default connect(null, { errorProducts })(SingleProduct);
