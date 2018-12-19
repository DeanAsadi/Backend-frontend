import React, { Component } from "react";
import axios from "axios";

import "./readProducts.css";

class ReadProducts extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      isLoading: false
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/api/products")
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(err => console.log("ERROR---->", err));
  }

  render() {
    const { products, isLoading } = this.state;

    const displayProducts = isLoading ? (
      <p>Loading...</p>
    ) : (
      products.map((elm, ind) => {
        return (
          <div key={ind}>
            {elm.name}
            <br />
            {elm.description} <br />
            {elm.price} <br />
            {elm.image_url} <br />
          </div>
        );
      })
    );

    return <div className="displayProducts">{displayProducts}</div>;
  }
}
export default ReadProducts;
