import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import CountryPicker from "./components/CountryPicker.js";
import Country from "./components/Country";
import HomePage from "./components/HomePage";
import covid19Api from "./apis/covid-19-api";
import PrivateRoute from "./components/PrivateRoute";

export const Context = React.createContext();

function App() {
  let [countries, setCountries] = useState([]);
  const [globalData, setGlobalData] = useState("");
  useEffect(() => {
    covid19Api.get("/countries").then((res) => {
      if (res.status === 200) setCountries(res.data);
    });
    covid19Api.get("/world/total").then((res) => {
      if (res.status === 200) {
        setGlobalData(res.data);
      }
    });
  }, []);
  return (
    <Context.Provider value={{ countries: countries, globalData }}>
      <div className="App">
        <CountryPicker />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <PrivateRoute
            countries={countries}
            component={Country}
            path="/:country"
          />
        </Switch>
      </div>
    </Context.Provider>
  );
}

export default App;
