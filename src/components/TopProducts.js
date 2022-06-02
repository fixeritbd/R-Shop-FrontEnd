import React, { useEffect, useState, useReducer, useContext } from "react";
import { Container, Grid, Row, Col } from "rsuite";
import Product from "./Product";
import axios from "axios";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH-REQUEST":
      return { ...state, loading: true };
    case "FETCH-SUCCESS":
      return { ...state, loading: false, products: action.payload };
  }
};

export default function TopProducts() {
  const [{ loading, products }, dispatch] = useReducer(reducer, { loading: false, products: [] });

  useEffect(() => {
    async function fetchProduct() {
      dispatch({ type: "FETCH-REQUEST" });
      try {
        let { data } = await axios.get("http://localhost:8000/products");
        dispatch({ type: "FETCH-SUCCESS", payload: data });
      } catch (error) {}
    }
    fetchProduct();
  }, []);

  return (
    <>
      <Container className="container top-products ">
        <Grid>
          <Row className="show-grid" gutter={30}>
            <Col xs={11}>
              <h2>Top Products</h2>
            </Col>
            <Col xs={13}>
              <ul>
                <li>
                  <span></span> All
                </li>
                <li>
                  <span></span> Boys Collection
                </li>
                <li>
                  <span></span> Girl Collection
                </li>
                <li>
                  <span></span> Shose Collection
                </li>
              </ul>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row className="show-grid" gutter={30}>
            {products.map((item, product) => (
              <Col key={product} xs={6}>
                <Product
                  img={item.imageUrls}
                  heading={item.title}
                  review={item.review}
                  brand={item.brand}
                  color={item.color}
                  size={item.sizes}
                  price={item.price}
                  item={item}
                  slug={item.slug}
                />
              </Col>
            ))}
          </Row>
        </Grid>
      </Container>
    </>
  );
}
