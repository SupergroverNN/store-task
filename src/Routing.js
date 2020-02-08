import { Route, Switch } from "react-router-dom";
import * as React from "react";

const Routing = () => {
  return (
    <Switch>
      <Route exact={true} path="/" component={LandingPage} />
      {/* <Route path="/editor" component={GraphEditor} /> */}
    </Switch>
  );
}

export default Routing;
