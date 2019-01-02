import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Views/Dashboard/Dashboard";
import CreateBill from "./Views/Manager/CreateBill/CreateBill";
import Bills from "./Views/Bills/Bills";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/bills" component={Bills} />
        <Route exact path="/create" component={CreateBill} />
      </Switch>
    );
  }
}

export default Routes;
