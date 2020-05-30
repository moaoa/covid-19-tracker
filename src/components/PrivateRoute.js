import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { Context } from "../App";
export default function PrivateRoute({
  component: Component,
  countries,
  ...rest
}) {
  const context = useContext(Context);
  console.log(context.countries);
  console.log(countries);
  return (
    <Route
      {...rest}
      render={(props) => {
        const { match, history } = props;

        if (
          context.countries.find(
            (country) => country.Country === match.params.country
          )
        )
          return <Component {...props} />;
        history.push("/");
      }}
    />
  );
}
