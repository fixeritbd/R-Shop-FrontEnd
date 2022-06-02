import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Form, Grid, Row } from "rsuite";
import { ImCross } from "react-icons/im";
import axios from "axios";
import Product from "./Product";
import { Store } from "../Store";

const CartItems = () => {
  const { state, dispatch } = useContext(Store);
  let [recentViewed, setRecentViewed] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      let { data } = await axios.get("http://localhost:8000/recentviewed");
      setRecentViewed(data);
    }
    fetchProduct();
  }, []);

  const CartUpdate = (product, quantity) => {
    dispatch({ type: "CART-ADD-ITEM", payload: { ...product, quantity } });
  };

  const handleRemove = (item) => {
    dispatch({ type: "CART-REMOVE-ITEM", payload: item });
  };

  const handleClearCart = () => {
    dispatch({ type: "CART-CLEAR" });
  };

  return (
    <>
      <Container className="container">
        {state.cart.cartItems.length > 0 && (
          <Grid>
            <Row className="show-grid" gutter={30}>
              <Col lg={16}>
                <table>
                  <tr>
                    <th>ITEM</th>
                    <th>PRICE</th>
                    <th>QUALITY</th>
                    <th>SUBTOTAL</th>
                    <th></th>
                  </tr>
                  {state.cart.cartItems.map((item, cartItems) => (
                    <tr key={cartItems}>
                      <td style={{ display: "flex" }}>
                        {item.imageUrls && <img src={item.imageUrls[0]} style={{ width: "15%" }} alt="" />}
                        <div className="item_des">
                          <p>{item.brand}</p>
                          <h5>{item.title}</h5>
                          {/* <p>{item.color}</p> */}
                          <p>{item.sizes}</p>
                        </div>
                      </td>
                      <td>
                        <h4>${item.price}</h4>
                      </td>
                      <td>
                        <div className="item_counter">
                          <button
                            
                            onClick={() => CartUpdate(item, item.quantity - 1)}
                            disabled={item.quantity == 1}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => CartUpdate(item, item.quantity + 1)}
                            disabled={item.quantity == item.inStock}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>
                        <h4>{item.price * item.quantity}</h4>
                      </td>
                      <td>
                        <ImCross style={{ cursor: "pointer" }} onClick={() => handleRemove(item)} />
                      </td>
                    </tr>
                  ))}
                </table>
                <div className="cart_operations">
                  <Row className="show-grid" gutter={30}>
                    <Col lg={12}>
                      <button onClick={handleClearCart}>Clear Cart</button>
                      <button>Update Cart</button>
                    </Col>
                  </Row>
                </div>

                <div>
                  <h3>Coupon Discount</h3>
                  <div className="coupon_discount">
                    <input className="coupon" type="text" placeholder="Enter your Coupon here..." />
                    <button>Submit Coupon</button>
                  </div>
                </div>
              </Col>

              <Col xs={8} bordered className="shipping_card">
                <div className="full_form">
                  <h3 style={{ padding: "30px 0" }}>Shipping</h3>
                  <Form>
                    <Form.Group controlId="country">
                      <Form.Control name="country" placeholder="Country" />
                    </Form.Group>

                    <Form.Group controlId="state">
                      <Form.Control name="state" type="text" autoComplete="off" placeholder="State/City" />
                    </Form.Group>

                    <Form.Group controlId="zip">
                      <Form.Control name="zip" type="text" placeholder="Zip" />
                    </Form.Group>
                  </Form>

                  <div>
                    <Row className="show-grid">
                      <Col xs={9} xsPush={15}>
                        <button type="submit" className="btn_submit">
                          Submit
                        </button>
                      </Col>
                    </Row>
                    <h6>
                      {/* <Row className="show-grid">
                      <Col xs={6}>SubTotal</Col>
                      <Col xs={6} xsPush={12}>
                        $258
                      </Col>
                    </Row> */}
                    </h6>
                    <Row className="show-grid">
                      <Col xs={4}>Shipping</Col>
                      <Col xs={6} xsPush={14}>
                        free
                      </Col>
                    </Row>
                    <h5 style={{ padding: "30px 0" }}>
                      <Row className="show-grid">
                        <Col xs={8}>Order Total</Col>
                        <Col xs={6} xsPush={10}>
                          {state.cart.cartItems.reduce(
                            (accumulator, current) => accumulator + current.quantity * current.price,
                            0
                          )}
                        </Col>
                      </Row>
                    </h5>
                    <Row>
                      <Col xs={24} className="check_out">
                        <button>Proceed To CheckOut</button>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs={24} className="recent_viewed">
                <div className="recent_viewed_title">
                  <h1>RECENTLY VIEWED</h1>
                </div>
                {state.cart.cartItems.map((item, releted) => (
                  <Col key={releted} xs={8}>
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
                {/* <div className="recent_viewed_card">
                  <Grid>
                    <Row className="show-grid" gutter={30}>
                      {recentViewed.map((item) => (
                        <Col xs={6}>
                          <Product
                            img={item.img}
                            heading={item.name}
                            rating={item.rating}
                            brand={item.brand}
                            color={item.color}
                            size={item.sizes}
                            price={item.price}
                          />
                        </Col>
                      ))}
                    </Row>
                  </Grid>
                </div> */}
              </Col>
            </Row>
          </Grid>
        )}
      </Container>
    </>
  );
};

export default CartItems;
