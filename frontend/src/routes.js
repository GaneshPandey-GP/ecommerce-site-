import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Products from "./containers/Products";
import Layout from "./hocs/Layout";


const BaseRouter = () => (
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/products" component={Products} /> 
                <Route exact path="/products/<id>/" component={Products} /> 
            </Switch>
        </Layout>
    </Router>
);

export default BaseRouter;
