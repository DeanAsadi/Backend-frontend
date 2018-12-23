import React, { Component } from "react";
import axios from "axios";

class DeleteProduct extends Component {
  state = {
    products: []
  };

  DeleteProductHandeler = id => {
    axios.delete(`http://localhost:4000/api/product/${id}`).then(response => {
      this.setState({ products: response.data });
    });
  };

  render() {
    return <div>DeleteProduct</div>;
  }
}
export default DeleteProduct;
