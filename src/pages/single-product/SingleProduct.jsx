import React, { useEffect } from "react";
import Header from "../../layouts/header/Header";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import "./singleProduct.scss";
import { Container } from "../../utils";
import { errorProducts } from "../../redux/actions/error-actions";

const SingleProduct = (props) => {
  const { id } = useParams();
  const data = useSelector((state) => state.error);

  console.log(id)
  const product = data.all_products;
  console.log(product);

  useEffect(() => {
    props.errorProducts(`products/${id}.json`);
  }, []);

  return (
    <div>
      <Header />
      <div className="single-product">
        <Container>
          <div className="single-card">
            <div className="single__img">
              <img
                width={500}
                height={200}
                src={product?.api_featured_image}
                alt=""
              />
            </div>
            <div className="single-wrapper">
              <div className="single-title">
                <strong className="brand">{product?.brand}</strong>
                <h2>{product?.name}</h2>
              </div>
              <strong className="single-price">
                {product?.price_sign} {product?.price}
              </strong>
              <p className="single-category">{parse(product?.description)}</p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default connect(null, { errorProducts })(SingleProduct);
