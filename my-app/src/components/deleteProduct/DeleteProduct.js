import React, { Component } from "react";
import axios from "axios";
import ReadProducts from "../readProducts/ReadProducts";

class DeleteProduct extends Component {
  state = {
    products: []
  };

  // deleteProductHandeler = id => {
  //   axios.delete(`http://localhost:4000/api/product/${id}`).then(response => {
  //     this.setState({ products: response.data });
  //   });
  // };

  render() {
    return (
      <div>
        {/* <ReadProducts deleteProduct={this.deleteProductHandeler} /> */}
        DeleteProduct
      </div>
    );
  }
}
export default DeleteProduct;
