import React, { useState, useEffect } from "react";
import { Container, Grid, Row, Col } from "rsuite";
import axios from "axios";

const Footer = () => {
  let [logo, setLogo] = useState({});

  useEffect(() => {
    let logoData = async () => {
      let data = await axios.get("http://localhost:8000/logo");
      setLogo(data.data.img);
    };

    logoData();
  }, []);

  return (
    <div className="footer">
      <Container className="container">
        <Grid>
          <Row className="show-grid footer__top">
            <Col md={8}>
              <div>
                <h2>R SHOP</h2>
              </div>
              <p>
                Nunc gravida mi neque, id fringilla velit efficitur vel. Sed mollis, arcu ac mollis eleifend,
                nunc
              </p>
            </Col>
            <Col md={4}>
              <h3>Generals</h3>

              <div className="footer__links">
                <p>Customer Support</p>
                <p>Payments</p>
                <p>API Support</p>
                <p>Privacy Policy</p>
              </div>
            </Col>
            <Col md={4}>
              <h3>Supports</h3>

              <div className="footer__links">
                <p>Terms and Conditions</p>
                <p>Products Return</p>
                <p>Wholesale Policy</p>
                <p>Address Store</p>
              </div>
            </Col>
            <Col md={8}>
              <div className="footer__subscribe">
                <h3>Subscribe Us</h3>
                <p>Sed mollis, arcu ac mollis eleifend, nunc</p>
                <div className="subscirbe-submit">
                  <input placeholder="subscribe" />
                  <button>Submit</button>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </Container>
      <div className="copyright-section">
        <p>Merkulove © Trali Template All rights reserved Copyrights 2021</p>
      </div>
    </div>
  );
};

export default Footer;
