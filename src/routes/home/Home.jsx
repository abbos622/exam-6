import React, { useState } from "react";
import Nav from "../../layouts/nav/Nav";
import Header from "../../layouts/header/Header";
import Swipper from "../../layouts/swiper/Swiper";
import Footer from "../../layouts/footer/Footer";
import AllProducts from "../../components/all-products/AllProducts";

const Home = () => {
  return (
    <>
      <Header/>
      {/* <Nav /> */}
      <Swipper/>
      <AllProducts/>

      {/* <Footer/> */}
    </>
  );
};

export default Home;
