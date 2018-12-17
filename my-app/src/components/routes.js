import React from "react";
import { Route, Switch } from "react-router-dom";
import ReadProducts from "./readProducts/ReadProducts";
import CreateProduct from "./createProduct/CreateProduct";

export default (
  <Switch>
    <Route exact component={ReadProducts} path="/home" />
    <Route component={CreateProduct} path="/newProduct" />
  </Switch>
);
