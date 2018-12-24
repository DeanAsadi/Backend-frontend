import React, { Component } from "react";
import axios from "axios";

import "./readProducts.css";

class ReadProducts extends Component {
  constructor(props) {
    super(props);
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

  deleteProductHandeler = id => {
    axios.delete(`http://localhost:4000/api/product/${id}`).then(() => {
      window.location.reload(); // To reload page after delete
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
            <button onClick={id => this.deleteProductHandeler(elm.product_id)}>
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
