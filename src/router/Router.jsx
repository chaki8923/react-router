import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page404 } from "../Page404";

import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes"
export const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/page1"
          //renderでprops受け取れる。そこにrouteの情報があるので取得
          render={({ match: { url } }) => (
            <Switch>
              {page1Routes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  {route.chirdlen}
                </Route>
              ))}
            </Switch>
          )}
        ></Route>
        <Route
          path="/page2"
          //renderでprops受け取れる。そこにrouteの情報があるので取得
          render={({ match: { url } }) => (
            <Switch>
              {page2Routes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  {route.chirdlen}
                </Route>
              ))}
            </Switch>
          )}
        ></Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>

    </>
  );
};
