import React, { useContext } from "react";
import Cards from "./Cards";
import { Context } from "../App";
import BarChart from "./BarChart";
export default function HomePage() {
  const { globalData } = useContext(Context);
  if (!globalData.Global) return <h3>loading</h3>;
  return (
    <>
      <Cards
        deaths={globalData.Global.TotalDeaths}
        confirmed={globalData.Global.TotalConfirmed}
        recovered={globalData.Global.TotalRecovered}
      />
      <BarChart />
    </>
  );
}
