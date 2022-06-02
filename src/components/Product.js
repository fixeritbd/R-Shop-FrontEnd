import React, { useContext, useState, useReducer, useEffect } from "react";
import { Panel } from "rsuite";
import { AiOutlineShopping } from "react-icons/ai";
import Rating from "./Rating";
import { Store } from "../Store";
import { Link } from "react-router-dom";

function Product(props) {
  const [activeColor, setActivecolor] = useState("");
  const [activeSize, setActivesize] = useState("");
  const { state, dispatch: ctxDispatch } = useContext(Store);

  const AddItem = (product) => {
    console.log("i'm here");
    const existingItem = state.cart.cartItems.find((item) => item._id === product._id);
    const quantity = existingItem ? existingItem.quantity + 1 : 1;
    ctxDispatch({ type: "CART-ADD-ITEM", payload: { ...product, quantity } });
  };

  return (
    <div className="single-product">
      <Link onClick={() => AddItem(props.item)} to={`/products/${props.slug}`}>
        <Panel bodyFill style={{ display: "inline-block", width: "100%" }}>
          <img src={props.img[0]} style={{ width: "100%" }} alt={props.name} />

          <div className="product-box">
            <Rating rating={props.review.rating} />
            <div className="brand">
              <p className="productBrand"> {props.brand}</p>
            </div>
          </div>
          <Panel header={props.heading}>
            <div className="productbox">
              <div className="productcolorbox">
                {props.color.map((item, color) => (
                  <span
                    key={color}
                    className={activeColor == item ? "productColor activeColor" : "productColor"}
                    style={{ background: `#${item}` }}
                    onClick={() => setActivecolor(item)}
                  ></span>
                ))}
              </div>
              <div className="productsize">
                {props.size.map((item, size) => (
                  <span
                    key={size}
                    className={activeSize == item ? "productSize productActiveSize" : "productSize"}
                    onClick={() => setActivesize(item)}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <span className="cart-product">
              <AiOutlineShopping className="shopping-bag" />
            </span>
            <span className="price">${props.price}</span>
          </Panel>
        </Panel>
      </Link>
    </div>
  );
}

export default Product;
