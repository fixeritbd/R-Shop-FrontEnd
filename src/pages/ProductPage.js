import React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import GotoTrali from "../components/GotoTrali";
import Productdeatils from "../components/ProductDeatils/Productdeatils";

const ProductPage = () => {
  return (
    <>

      <Helmet>
        <title>Product</title>
      </Helmet>
      <Productdeatils />

      <GotoTrali />
      <Footer />
    </>
  );
};

export default ProductPage;
