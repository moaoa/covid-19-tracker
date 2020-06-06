import React, { useContext } from "react";
import Cards from "./Cards";
import { Context } from "../App";
import BarChart from "./BarChart";
import Loader from "react-loader-spinner";
export default function HomePage() {
  const { globalData } = useContext(Context);
  if (!globalData.Global)
    return (
      <div style={{ textAlign: "center", margin: "2rem" }}>
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    );
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
