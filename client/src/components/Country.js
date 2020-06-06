import React, { useState, useContext, useEffect } from "react";
import Chart from "./Chart";
import Cards from "./Cards";
import { Context } from "../App";
import Alert from "@material-ui/lab/Alert";
import styles from "./Country.module.css";
export default function Country(props) {
  const { selectedCountry, globalData } = useContext(Context);
  const [countryData, setCountryData] = useState("");
  useEffect(() => {
    setCountryData(
      globalData.Countries.find((c) => c.Slug === selectedCountry)
    );
  }, [selectedCountry]);

  if (!globalData.Global) return <h3>loading</h3>;
  if (!countryData)
    return (
      <div className={styles.error}>
        <Alert severity="error">NO Data for this country</Alert>
      </div>
    );
  const { TotalDeaths, TotalConfirmed, TotalRecovered } = countryData;
  console.log("death from country : ", TotalDeaths);

  return (
    <>
      <h3 className={styles.centerWithFlex}>{props.match.params.country}</h3>
      <Cards
        deaths={TotalDeaths}
        confirmed={TotalConfirmed}
        recovered={TotalRecovered}
      />
      <Chart />
    </>
  );
}
