import { createContext, useReducer } from "react";

const Store = createContext();

const cartInitialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
  },
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "CART-ADD-ITEM":
      const newItem = action.payload;
      const existingItems = state.cart.cartItems.find((item) => item._id === newItem._id);
      const cartItems = existingItems
        ? state.cart.cartItems.map((item) => (item._id === existingItems._id ? newItem : item))
        : [...state.cart.cartItems, newItem];
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems,
        },
      };

    case "CART-REMOVE-ITEM": {
      const cartItems = state.cart.cartItems.filter((item) => item._id !== action.payload._id);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems,
        },
      };
    }

    case "CART-CLEAR": {
      const cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems,
        },
      };
    }
    default:
      return state;
  }
};

const StoreProvier = (props) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};

export { StoreProvier, Store };
