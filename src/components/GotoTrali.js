import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Grid, Row } from "rsuite";

const GotoTrali = () => {
  let [images, setImages] = useState([]);
  let [logo, setLogo] = useState({});
  useEffect(() => {
    let imgData = async () => {
      let { data } = await axios.get("http://localhost:8000/gototralli");
      setImages(data);
      let logoData = await axios.get("http://localhost:8000/logo");
      setLogo(logoData.data.img);
    };

    imgData();
  }, []);

  return (
    <>
      <div className="tralli_full">
        <Grid fluid>
          <Row className="show-grid">
            <div className="logo_icon">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            {images.map((item, i) => (
              <div key={i} className="buttom_img">
                <Col xs={4}>
                  <img src={item.img} alt="" />
                </Col>
              </div>
            ))}
          </Row>
        </Grid>
      </div>
    </>
  );
};

export default GotoTrali;
