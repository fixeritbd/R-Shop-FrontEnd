import React, { useReducer, useEffect } from "react";
import Banner from "../components/Banner";
import Deal from "../components/Deal";
import TopProducts from "../components/TopProducts";
import FeatureBanner from "../components/FeatureBanner";
import Footer from "../components/Footer";
import axios from "axios";
import { Loader } from "rsuite";
import { Helmet } from "react-helmet-async";
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH-REQUEST":
      return { ...state, loading: true };
    case "FETCH-SUCCESS":
      return { ...state, loading: false, products: action.payload };
  }
};

function Component() {
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
  if (loading) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Loader size="lg" />
      </div>
    );
  }
  return (
    <div>
      <Helmet>
        {" "}
        <title>Home</title>{" "}
      </Helmet>
      <Banner />
      <Deal />
      <TopProducts />
      <FeatureBanner />
      <Footer />
    </div>
  );
}

export default Component;
