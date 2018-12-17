import React from "react";
import { Route, Switch } from "react-router-dom";
import ReadProducts from "./src/components/readProducts/ReadProducts";
import DeleteProduct from "./src/components/deleteProduct/DeleteProduct";
import CreateProduct from "./src/components/createProduct/CreateProduct";

export default (
  <Switch>
    <Route exact component={ReadProducts} path="/home" />
    <Route component={DeleteProduct} path="/delete" />
    <Route component={CreateProduct} path="/newProduct" />
  </Switch>
);
