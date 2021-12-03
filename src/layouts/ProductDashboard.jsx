import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Grid } from "semantic-ui-react";
import { Route, Routes } from "react-router";
import CartDetail from "../pages/CartDetail";

export default function ProductDashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/products" component={ProductList} />
            <Route path="/products:id" component={ProductList} />
            <Route path="/cart" component={CartDetail} />
            <ProductList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
