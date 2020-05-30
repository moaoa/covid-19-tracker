import React from "react";
import Cards from "./Cards";
import { Context } from "../App";
export default function HomePage() {
  const { globalData } = Context;
  return (
    <>
      <Cards
        deaths={globalData?.TotalDeaths}
        confirmed={globalData?.TotalConfirmed}
        recovered={globalData?.TotalRecovered}
      />
    </>
  );
}
