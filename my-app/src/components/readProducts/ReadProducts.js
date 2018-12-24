import React, { Component } from "react";
import axios from "axios";

import "./readProducts.css";
import CreateProduct from "../createProduct/CreateProduct";

class ReadProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  getProducts = () => {
    axios.get(`http://localhost:4000/api/products`).then(res => {
      this.setState({ products: res.data });
    });
  };

  componentDidMount() {
    this.getProducts();
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
