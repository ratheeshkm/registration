import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import App from "./App";
import Registration from "./Registration";
//import RegSucess from "./RegSucess";

const Routes = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/registration">
            <Registration />
          </Route>
          <Route exact path="/reg-success">
            {/* <RegSucess /> */}
          </Route>
          <Route path="/">
            <Registration />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Routes;
