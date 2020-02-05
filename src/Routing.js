import { Route, Switch } from "react-router-dom";
import * as React from "react";
import GraphEditor from './components/GraphEditor/GraphEditor';
import LandingPage from './components/LandingPage/LandingPage';

const Routing = () => {
  return (
    <Switch>
      <Route exact={true} path="/" component={LandingPage} />
      <Route path="/editor" component={GraphEditor} />
    </Switch>
  );
}

export default Routing;
