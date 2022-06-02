import React, { useState, useEffect } from "react";
import { Container, Button } from "rsuite";
import axios from "axios";
import { Carousel } from "rsuite";

export default function Banner() {
  let [banner, setBanner] = useState([]);

  useEffect(() => {
    let logoData = async () => {
      let data = await axios.get("http://localhost:8000/banner");
      setBanner(data.data);
    };
    logoData();
  }, []);

  return (
    <div className="carosulMain">
      <Carousel autoplay className="custom-slider">
        {banner.map((item, banner) => (
          <div key={banner} className="sliderItem">
            <div className="bannerImg" style={{ backgroundImage: `url(${item.img})` }}>
              <div className="container">
                <div className="banner_text">
                  <h4>{item.subheading}</h4>
                  <h1>{item.heading}</h1>
                  <Button className="hero-btn">{item.button}</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
