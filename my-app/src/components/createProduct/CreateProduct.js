import React, { Component } from "react";
import axios from "axios";

class CreateProduct extends Component {
  constructor() {
    super();
    this.state = {
      product: "",
      description: "",
      imageUrl: "",
      price: 0
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandeler = e => {
    e.preventDefault();
    const { product, description, imageUrl, price } = this.state;
    if ((product, description, imageUrl, price)) {
      axios.post("http://localhost:4000/api/product", {
        product,
        description,
        imageUrl,
        price
      });
    }
  };

  render() {
    const { product, description, imageUrl, price } = this.state;
    return (
      <div>
        <form onClick={this.onSubmitHandeler}>
          <input
            name="product"
            value={product}
            onChange={this.handleChange}
            placeholder="Product"
          />
          <input
            name="imageUrl"
            value={imageUrl}
            onChange={this.handleChange}
            placeholder=" Image"
          />
          <input
            name="price"
            vallue={price}
            onChange={this.handleChange}
            placeholder="Price "
          />
          <button>Add Product</button>
        </form>
      </div>
    );
  }
}
export default CreateProduct;
