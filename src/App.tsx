import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "routes";
import Spinner from "components/spinner/Spinner";

function App(): React.ReactElement {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Switch>
          {routes.map(
            ({ path, pathName, exact, component: RouteComponent }) => (
              <Route path={path} key={pathName} exact={exact}>
                {<RouteComponent />}
              </Route>
            )
          )}
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
