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
      productPrice: "",
      productImage: ""
    };
  }

  componentDidMount() {
    this.props.getAllProductsFunc();
    this.setState({ editting: false });
  }

  handleUpdateProduct = (id, name, price, discription, image_url) => {
    axios
      .put(`http://localhost:4000/api/product${id}`, {
        name,
        price,
        discription,
        image_url
      })
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
    const { allProducts } = this.props;
    const displayProducts = allProducts.map((elm, ind) => {
      return (
        <div key={ind}>
          Image: {elm.image_url}
          <br />
          Name: {elm.name} <br />
          Price: {elm.price} <br />
          Discription : {elm.discription}
          <button onClick={this.handleEdit}>Edit</button>
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
                  productPrice,
                  productDesc,
                  productImage
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
