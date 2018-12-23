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
      .then(response => {
        this.setState({ products: response.data });
      })
      .catch(err => console.log("ERROR---->", err));
  }

  deleteProductHandeler = product_id => {
    console.log("product_id-->", product_id);
    axios
      .delete(`http://localhost:4000/api/product/${product_id}`)
      .then(response => {
        this.setState({ products: response.data });
      })
      .catch(err => {
        console.log("err---> ", err);
      });
  };

  render() {
    const { products, isLoading } = this.state;
    const displayProducts = isLoading ? (
      <p>Loading...</p>
    ) : (
      products.map((elm, ind) => {
        console.log("elm--->", elm);
        return (
          <div key={elm.product_id}>
            {elm.name}
            <br />
            {elm.description} <br />
            {elm.price} <br />
            {elm.image_url} <br />
            <button onClick={() => this.deleteProductHandeler(elm.product_id)}>
              Delete
            </button>
          </div>
        );
      })
    );

    return <div className="displayProducts">{displayProducts}</div>;
  }
}
export default ReadProducts;
