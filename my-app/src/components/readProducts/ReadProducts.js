import React, { Component } from "react";
import "./readProducts.css";
import axios from "axios";

class ReadProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editting: false,
      productName: "",
      productDesc: "",
      productPrice: 0,
      productImage: ""
    };
  }

  componentDidMount() {
    this.props.getAllProductsFunc();
  }

  handleUpdateProduct = (id, name, discription, image_url, price) => {
    axios
      .put(`http://localhost:4000/api/product/${id}`, {
        name,
        discription,
        image_url,
        price
      })
      .then(() => this.props.getAllProductsFunc());
  };
  handleDelete = id => {
    axios
      .delete(`http://localhost:4000/api/product/${id}`)
      .then(() => this.props.getAllProductsFunc());
  };

  handleEdit = () => {
    this.setState({ editting: !this.state.editting });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { productDesc, productImage, productName, productPrice } = this.state;
    console.log("name-->", productName);
    const { allProducts } = this.props;
    const displayProducts = allProducts.map((elm, ind) => {
      return (
        <div key={elm.product_id}>
          Image: {elm.image_url}
          <br />
          Name: {elm.name} <br />
          Price: {elm.price} <br />
          Discription : {elm.discription}
          <button onClick={this.handleEdit}>Edit</button>
          <button onClick={id => this.handleDelete(elm.product_id)}>
            Delete
          </button>
          <br />
        </div>
      );
    });
    return (
      <div className="displayProducts">
        {this.state.editting ? (
          <div>
            <input
              name="productName"
              value={productName}
              onChange={this.handleChange}
              placeholder="Product Name"
            />
            <input
              name="productPrice"
              value={productPrice}
              onChange={this.handleChange}
              placeholder="ProductPrice"
            />
            <input
              name="productDesc"
              value={productDesc}
              onChange={this.handleChange}
              placeholder="Product Desc"
            />
            <input
              name="productImage"
              value={productImage}
              onChange={this.handleChange}
              placeholder="ProductImage"
            />

            <button
              onClick={id =>
                this.handleUpdateProduct(
                  productName,
                  productDesc,
                  productImage,
                  productPrice
                )
              }
            >
              Update
            </button>
          </div>
        ) : (
          displayProducts
        )}
      </div>
    );
  }
}
export default ReadProducts;
