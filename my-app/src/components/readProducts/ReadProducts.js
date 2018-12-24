import React, { Component } from "react";
import axios from "axios";

import "./readProducts.css";
import CreateProduct from "../createProduct/CreateProduct";

class ReadProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.state.products);
    return <div className="displayProducts" />;
  }
}
export default ReadProducts;
