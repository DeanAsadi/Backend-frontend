import React from "react";
import { Route, Switch } from "react-router-dom";
import ReadProducts from "./readProducts/ReadProducts";
import DeleteProduct from "./deleteProduct/DeleteProduct";
import CreateProduct from "./createProduct/CreateProduct";

export default (
  <Switch>
    <Route exact component={ReadProducts} path="/home" />
    <Route component={DeleteProduct} path="/delete" />
    <Route component={CreateProduct} path="/newProduct" />
  </Switch>
);
