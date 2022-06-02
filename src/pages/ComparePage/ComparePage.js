import axios from "axios";
import "./ComparePage.css";
import React, { useEffect, useState } from "react";
import { Col, Container, Grid, Row } from "rsuite";
import GotoTrali from "../../components/GotoTrali";
import { ImCross } from "react-icons/im";
import { AiOutlineShopping } from "react-icons/ai";
import Rating from "../../components/Rating";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet-async";

const ComparePage = () => {
  const [compareitem, setCompareItem] = useState([]);
  useEffect(() => {
    const compareItemsData = async () => {
      const { data } = await axios.get("http://localhost:8000/compare");
      setCompareItem(data);
    };
    compareItemsData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Compare</title>
      </Helmet>{" "}
      <div className="compare_page">
        <Container className="container">
          <Grid style={{ marginBottom: "50px" }}>
            <Row className="show-grid">
              <Col xs={20} className="compare_page_title">
                <p className="pagination"> Home | Shop | Compare</p>
                <h1 className="title">Compare Items</h1>
              </Col>
              <Col xs={4}>
                <button className="only_difference">Only Differences</button>
              </Col>
            </Row>
            <Row className="show-grid  all_item">
              <Col xs={24}>
                <table>
                  <tr>
                    <th>ITEM</th>
                    <th>COLOR</th>
                    <th>SIZE</th>
                    <th>MATERIAL</th>
                    <th>PRICE</th>
                    <th></th>
                  </tr>
                  {compareitem.map((item, compare) => (
                    <tr key={compare} className="all_item">
                      <td style={{ display: "flex" }}>
                        <div className="item_img" style={{ width: "100px" }}>
                          <img src={item.img} alt="" style={{ width: "100%" }} />
                        </div>
                        <div className="item_des">
                          <p>{item.brand}</p>
                          <p>{item.name}</p>
                          {/* <p>{item.rating}</p> */}
                          <Rating rating={item.rating} />
                          <span className="compare_bag">
                            <AiOutlineShopping className="compare-bag_icon" />
                          </span>
                        </div>
                      </td>
                      <td>{item.color}</td>
                      <td>
                        <span
                          className="item_size"
                          style={{
                            display: "inline-block",
                            textAlign: "center",
                            height: "30px",
                            width: "30px",
                            lineHeight: "27px",
                            borderRadius: "50%",
                            border: "2px solid gray",
                          }}
                        >
                          {item.sizes}
                        </span>
                      </td>
                      <td>{item.material}</td>
                      <td>{item.price}</td>
                      <td>
                        <ImCross />
                      </td>
                    </tr>
                  ))}
                </table>
              </Col>
            </Row>
          </Grid>
        </Container>
        <GotoTrali />
      </div>
      <Footer />
    </>
  );
};

export default ComparePage;
