import React, { Component } from "react";
import axios from "axios";

class CreateProduct extends Component {
  constructor() {
    super();
    this.state = {
      productName: "",
      description: "",
      image_url: "",
      price: 0
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandeler = e => {
    e.preventDefault();
    const { productName, description, image_url, price } = this.state;
    if ((productName, description, image_url, price)) {
      axios.post("http://localhost:4000/api/product", {
        name: productName,
        description,
        image_url,
        price
      });
    }
  };

  render() {
    const { productName, description, image_url, price } = this.state;
    return (
      <div>
        <form onClick={this.onSubmitHandeler}>
          <input
            name="productName"
            value={productName}
            onChange={this.handleChange}
            placeholder="productName"
          />
          <input
            name="image_url"
            value={image_url}
            onChange={this.handleChange}
            placeholder=" Image"
          />
          <input
            name="price"
            vallue={price}
            onChange={this.handleChange}
            placeholder="Price "
          />
          <input
            name="description"
            vallue={description}
            onChange={this.handleChange}
            placeholder="description "
          />
          <button>Add Product</button>
        </form>
      </div>
    );
  }
}
export default CreateProduct;
