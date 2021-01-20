import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "routes";
import Spinner from "components/spinner/Spinner";
import Layout from "Layout";

function App(): React.ReactElement {
  return (
    <Router>
      <Layout>
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
      </Layout>
    </Router>
  );
}

export default App;
