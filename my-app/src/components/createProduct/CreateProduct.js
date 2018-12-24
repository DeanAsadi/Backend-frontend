import React, { Component } from "react";
import axios from "axios";
import ReadProducts from "../readProducts/ReadProducts";

class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      name: "",
      discription: "",
      price: 0,
      image_url: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandeler = e => {
    e.preventDefault();
    const { name, discription, price, image_url } = this.state;
    if ((name, discription, price, image_url)) {
      axios
        .post(`http://localhost:4000/api/product`, {
          name,
          discription,
          price,
          image_url
        })
        .then(() => {
          this.getProducts();
        })
        .catch(err => console.log("POST err--->", err));
    }
  };

  render() {
    const { name, discription, price, image_url, products } = this.state;
    console.log("products--> ", products);
    return (
      <div>
        <form onSubmit={this.onSubmitHandeler}>
          <input
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Product name"
          />
          <input
            name="price"
            value={price}
            onChange={this.handleChange}
            placeholder="Product price"
          />
          <input
            name="discription"
            value={discription}
            onChange={this.handleChange}
            placeholder="Product discription"
          />
          <input
            name="image_url"
            value={image_url}
            onChange={this.handleChange}
            placeholder="Product image_url"
          />
          <button>Add Product </button>
        </form>
      </div>
    );
  }
}
export default CreateProduct;
