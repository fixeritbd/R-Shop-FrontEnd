import React from "react";
import { Container, Button, Grid, Row, Col } from "rsuite";
import CartItems from "../../components/CartItems";
import GotoTrali from "../../components/GotoTrali";
import Footer from "../../components/Footer";

import "./CartPage.css";
import { Helmet } from "react-helmet-async";

const CartPage = () => {
  return (
    <>
      <Helmet>
        <title>Cart Page</title>
      </Helmet>
      <Container className="container cart_page_main">
        <div className="cart_page_title">
          <p className="pagination"> Home | Shop | Cart</p>
          <h1 className="title">Cart Page</h1>
        </div>
      </Container>
      <CartItems />
      <GotoTrali />
      <Footer />
    </>
  );
};

export default CartPage;
