import React, { Component } from "react";
import { Link } from "react-router-dom";

//Components-------------------------------
import "./App.css";
import routes from "../src/components/routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/home">
          <button> Products </button>
        </Link>
        <Link to="/newProduct">
          <button> New Product </button>
        </Link>
        {routes}
      </div>
    );
  }
}

export default App;
