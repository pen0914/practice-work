import { Route, Switch } from "react-router-dom";

import { Home } from "./Home";
import { Next } from "./Next";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/next">
        <Next />
      </Route>
    </Switch>
  );
};
