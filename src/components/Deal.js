import React, { useEffect, useState } from "react";
import { Container, Button, Grid, Row, Col } from "rsuite";
import axios from "axios";

export default function Deal() {
  let [deal, setDeal] = useState([]);

  useEffect(() => {
    let delData = async () => {
      let data = await axios.get("https://evening-tundra-91888.herokuapp.com/deal");
      setDeal(data.data);
    };

    delData();
  }, []);

  return (
    <Container className="container deal-part">
      <Grid>
        <Row className="show-grid" gutter={30}>
          {deal.map((item, index, del) => (
            <Col key={del} xs={12}>
              <div className="dealImg" style={{ backgroundImage: `url(${item.img})` }}>
                <h5>{item.subheading}</h5>
                <h2>{item.heading}</h2>
                <Button className={`deal-btn${index}`}>{item.button}</Button>
              </div>
            </Col>
          ))}
        </Row>
      </Grid>
    </Container>
  );
}
