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
  componentDidMount() {
    this.getProducts();
  }
  getProducts = () => {
    axios.get(`http://localhost:4000/api/products`).then(res => {
      this.setState({ products: res.data });
    });
  };

  render() {
    console.log("from App--->", this.state.products);
    return (
      <div className="App">
        <ReadProducts
          products={this.state.products}
          getAllProductsFunc={this.getProducts()}
        />
        <CreateProduct
          products={this.state.products}
          getAllProductsFunc={this.getProducts()}
        />
      </div>
    );
  }
}

export default App;
