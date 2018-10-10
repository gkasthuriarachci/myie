import React from "react";
import { Session } from '@myie/interact'
import {
  Route,
  Redirect
} from "react-router-dom";
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        Session.isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/authentication",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );

  export default PrivateRoute