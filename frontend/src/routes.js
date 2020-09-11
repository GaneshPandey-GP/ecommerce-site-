import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Products from "./components/Products";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";


const BaseRouter = () => (
    <Router>
        <Switch>
            <Route exact path="/products" component={Products} /> 
            <Route exact path="/products/<id>/" component={Products} /> 
            <Route exact path="/" component={Home} /> 
            <Route exact path="/dashboard" component={Dashboard} /> 
        </Switch>
    </Router>
);

export default BaseRouter;
