import React, { useContext, useState, useReducer, useEffect } from "react";
import { Col, Container, Grid, Row } from "rsuite";
import troli1 from "./troli-1.png";
import troli2 from "./troli-2.png";
import troli3 from "./troli-3.png";
import troli4 from "./troli-4.png";
import img1 from "./bg.png";
import img2 from "./bg-2.png";
import img3 from "./bg-3.png";
import "./productdeatils.css";
import Rating from "../Rating";
import { AiOutlineShopping } from "react-icons/ai";
import ReletedProducts from "../../ReletedProducts";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Store } from "../../Store";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH-REQUEST":
      return { ...state, loading: true };
    case "FETCH-SUCCESS":
      return { ...state, loading: false, product: action.payload };
  }
};

const ProductDeatils = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const { state, dispatch: ctxDispatch } = useContext(Store);

  const [{ loading, product }, dispatch] = useReducer(reducer, { loading: false, product: {} });
  useEffect(() => {
    async function fetchProduct() {
      dispatch({ type: "FETCH-REQUEST" });
      try {
        let { data } = await axios.get(`http://localhost:8000/products/${params.slug}`);
        dispatch({ type: "FETCH-SUCCESS", payload: data });
      } catch (error) {}
    }
    fetchProduct();
  }, [params.slug]);

  const CartUpdate = (product, quantity) => {
    ctxDispatch({ type: "CART-ADD-ITEM", payload: { ...product, quantity } });
  };

  const CartAdd = (product) => {
    ctxDispatch({ type: "CART-ADD-ITEM", payload: { ...product } });
    navigate("/cartpage");
  };

  console.log(product);

  if (loading) return <h1>Loading</h1>;
  return (
    <>
      <div className="product-deatils-part">
        <Container className="container">
          <Grid>
            <Row className="show-grid" gutter={30}>
              <Col xs={12}>
                {product.imageUrls && <img src={product.imageUrls[0]} className="product-img" alt="" />}
              </Col>
              <Col xs={12}>
                <div className="product-content">
                  <h2>{product?.title}</h2>
                  <div className="product-pricing">
                    <div className="pricing-left">
                      <h4>${product?.price}</h4>
                      <del>$249</del>
                      <span className="productColor" style={{ background: "green" }}></span>
                      <p>In Stock</p>
                    </div>
                  </div>
                  <div className="product-review">
                    {" "}
                    {product.review && <Rating rating={product.review.rating} />}
                    <h5>6 Review</h5> <h5>|</h5> <h5>Add Review</h5>
                  </div>
                  <div className="product-review"></div>
                  <div className="product-description">
                    {" "}
                    <p>{product?.description?.full}</p>{" "}
                  </div>
                  <div className="product-colorSize">
                    <div className="product-select">
                      <h5>Select Color</h5>
                      <span className="productColor" style={{ background: "#622060" }}></span>
                      <span className="productColor" style={{ background: "#1473A9" }}></span>
                      <span className="productColor" style={{ background: "#FBDADA" }}></span>
                      <span className="productColor" style={{ background: "#519D04" }}></span>
                    </div>
                    <div className="product-size">
                      <h5>choose choice</h5>
                      {product.sizes &&
                        product.sizes.map((item, sizes) => (
                          <span key={sizes} className="size" style={{ margin: " 0px 3px" }}>
                            {item}
                          </span>
                        ))}
                    </div>
                  </div>

                  {state.cart.cartItems.map(
                    (item, detils) =>
                      item._id === product._id && (
                        <div key={detils} className="product-btn">
                          <div className="plusminus">
                            {" "}
                            <button
                              onClick={() => CartUpdate(item, item.quantity - 1)}
                              disabled={item.quantity === 1}
                            >
                              -
                            </button>{" "}
                            <h5>{item.quantity}</h5>{" "}
                            <button
                              onClick={() => CartUpdate(item, item.quantity + 1)}
                              disabled={item.quantity === item.inStock}
                            >
                              +
                            </button>{" "}
                          </div>
                          <button onClick={() => CartAdd(item)} className="btn">
                            {" "}
                            <h5>
                              <AiOutlineShopping style={{ fontSize: "28px" }} />
                            </h5>
                            <h5>Add to cart</h5>
                          </button>
                          <h3>$290</h3>
                        </div>
                      )
                  )}
                </div>
              </Col>
            </Row>
            <Row className="show-grid" style={{ marginTop: "20px" }} gutter={30}>
              <Col lg={4}>
                {" "}
                <div>
                  <img style={{ width: "100%" }} src={troli2} alt="product-img-troli-2" />{" "}
                </div>
              </Col>
              <Col lg={4}>
                {" "}
                <img style={{ width: "100%" }} src={troli3} alt="product-img-troli-3" />{" "}
              </Col>
              <Col lg={4}>
                {" "}
                <img style={{ width: "100%" }} src={troli4} alt="product-img-troli-4" />{" "}
              </Col>
            </Row>
            <Row className="show-grid" style={{ marginTop: "100px" }} gutter={30}>
              <Col xs={24}>
                <div className="description-title">
                  <h3>description</h3>
                  <h3>reviews (4)</h3>
                  <h3>additional information</h3>
                </div>
              </Col>
            </Row>
            <Row className="show-grid" style={{ marginTop: "10px" }} gutter={30}>
              <Col xs={24}>
                <div className="description-bottom">
                  <p>
                    Praesent nec fermentum ipsum. Etiam turpis neque, laoreet quis placerat vel, faucibus non
                    tortor. Quisque ut augue et augue consequat blandit nec vel leo. Donec aliquam mauris vel
                    ultrices viverra. Donec pulvinar et odio eget commodo. Maecenas massa odio, tincidunt
                    vitae erat sed, sodales malesuada nisl. Sed consequat libero enim, sed porttitor tortor
                    lacinia et. Donec gravida luctus purus a semper. Fusce id tincidunt eros. Vestibulum sit
                    amet nunc id lorem vestibulum euismod id vitae tortor. Pellentesque ac consectetur dui.
                    Aenean nec maximus neque. Nulla facilisi. Vivamus non ex sodales, malesuada mi ac,
                    pulvinar nibh.
                  </p>
                  <ul>
                    <li>
                      <p>Material:</p> <h5>100% Cotton</h5>{" "}
                    </li>
                    <li>
                      <p>Color:</p> <h5>Gree, Blue, Beige, Pink</h5>{" "}
                    </li>
                    <li>
                      <p>Sizes:</p> <h5>S, M, L, Xl</h5>{" "}
                    </li>
                    <li>
                      <p>Weight:</p> <h5>460 g</h5>{" "}
                    </li>
                  </ul>
                  <p>
                    Ut eu ex est. Nam vitae feugiat massa, eu feugiat ligula. Ut justo sem, convallis eget
                    nisi eget, mollis euismod turpis. Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia curae; Nullam commodo malesuada placerat. Proin blandit, ipsum
                    commodo laoreet finibus, orci purus pharetra elit, sit amet dapibus mauris quam id odio.
                    Fusce ac lectus eros. Quisque turpis libero, interdum eu dictum eu, fermentum sed orci.
                    Mauris id elit tellus.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="show-grid" gutter={30}>
              <Col xs={8}>
                {" "}
                <img src={img1} alt="img-1" />{" "}
              </Col>
              <Col xs={8}>
                {" "}
                <img src={img2} alt="img-2" />{" "}
              </Col>
              <Col xs={8}>
                {" "}
                <img src={img3} alt="img-3" />{" "}
              </Col>
            </Row>
          </Grid>
          <ReletedProducts />
        </Container>
      </div>
    </>
  );
};

export default ProductDeatils;
