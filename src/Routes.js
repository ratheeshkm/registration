import React, { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
const Registration = lazy(() => import('./Registration'));
//import RegSucess from "./RegSucess";

const Routes = () => {
  return (
    <Fragment>
      <ErrorBoundary>
        <Router>
          <Suspense fallback={<div>Loading ....</div>}>
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
          </Suspense>
        </Router>
      </ErrorBoundary>
    </Fragment>
  );
};

export default Routes;
