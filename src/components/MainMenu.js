import React, { useContext, useEffect, useState } from "react";
import { Container, Navbar, Nav } from "rsuite";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { GiScales } from "react-icons/gi";
import axios from "axios";
import { Link } from "react-router-dom";
import { Store } from "../Store";

export default function MainMenu() {
  const { state, dispatch } = useContext(Store);
  let [logo, setLogo] = useState({});

  useEffect(() => {
    let logoData = async () => {
      let data = await axios.get("http://localhost:8000/logo");
      setLogo(data.data.img);
    };

    logoData();
  }, []);

  console.log(logo);

  return (
    <div>
      <Container className="container" style={{ position: "static" }}>
        <Navbar className="menu">
          <Navbar.Brand href="#">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </Navbar.Brand>
          <Nav className="menu-item">
            <Link to="/">
              <Nav.Item>Home</Nav.Item>
            </Link>
            <Nav.Item>About Us</Nav.Item>
            <Nav.Item>Services</Nav.Item>
            <Nav.Item>Blog</Nav.Item>
            <Nav.Item>Contacts</Nav.Item>
          </Nav>
          <Nav pullRight>
            <div className="nav-icon">
              <FaRegUserCircle className="icon" />
              <AiOutlineHeart className="icon" />
              <Link to="/compare">
                <GiScales className="icon" />
              </Link>
              <Link to="/cartpage">
                <span className="cart">
                  <AiOutlineShoppingCart className="icon" />
                  <span className="round">{state.cart.cartItems.length}</span>
                </span>
              </Link>
            </div>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
}
