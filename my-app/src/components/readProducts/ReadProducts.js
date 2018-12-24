import React, { Component } from "react";
import "./readProducts.css";
import axios from "axios";

class ReadProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editting: false
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

  render() {
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
        {this.state.editting ? <input /> : displayProducts}
      </div>
    );
  }
}
export default ReadProducts;
