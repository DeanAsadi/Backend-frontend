import React, { Component } from "react";
import axios from "axios";

class CreateProduct extends Component {
  constructor() {
    super();
    this.state = {
      product: "",
      description: "",
      imageUrl: "",
      price: ""
    };
  }

  onSubmitHandeler = e => {
    e.preventDefault();
    const { product, description, imageUrl, price } = this.state;
    if ((product, description, imageUrl, price)) {
      axios.post("http://localhost:4000/api/product");
    }
  };

  render() {
    return <div>CreateProduct</div>;
  }
}
export default CreateProduct;
