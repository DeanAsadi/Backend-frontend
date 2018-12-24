import React, { Component } from "react";
import axios from "axios";

class CreateProduct extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return <div />;
  }
}
export default CreateProduct;
