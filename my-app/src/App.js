import React, { Component } from "react";
import axios from "axios";

//Components-------------------------------
import "./App.css";
import ReadProducts from "./components/readProducts/ReadProducts";
import CreateProduct from "./components/createProduct/CreateProduct";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  getProducts = () => {
    axios.get(`http://localhost:4000/api/products`).then(res => {
      this.setState({ products: res.data });
    });
  };

  render() {
    return (
      <div>
        <ReadProducts
          allProducts={this.state.products}
          getAllProductsFunc={this.getProducts}
        />
        <br />
        <CreateProduct
          allProducts={this.state.products}
          getAllProductsFunc={this.getProducts}
        />
        <br />
      </div>
    );
  }
}

export default App;
