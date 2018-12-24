import React, { Component } from "react";
import axios from "axios";

class CreateProduct extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
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
    const { name, description, image_url, price } = this.state;
    if ((name, description, image_url, price)) {
      axios
        .post("/api/product", {
          name,
          description,
          image_url,
          price
        })
        .then(() => {
          this.props.history.replace("/home");
        });
    }
  };

  render() {
    const { name, description, image_url, price } = this.state;
    return (
      <div>
        <form onClick={this.onSubmitHandeler}>
          <input
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="name"
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
