import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { Context } from "../App";
import styles from "./BarChart.module.css";
import Alert from "@material-ui/lab/Alert";
export default function BarChart() {
  const { selectedCountry, globalData } = useContext(Context);
  let dataToDisplay;
  if (globalData.Global && selectedCountry) {
    console.log(globalData.Countries);
    console.log(selectedCountry);

    dataToDisplay = globalData.Countries.find(
      (c) => c.Slug === selectedCountry
    );

    console.log(dataToDisplay);
  } else if (globalData.Global) {
    dataToDisplay = globalData.Global;
    console.log(dataToDisplay);
  }
  console.log(dataToDisplay);

  if (!globalData.Global) return <h3>loading</h3>;
  if (!dataToDisplay)
    return (
      <div className={styles.barchart}>
        <Alert severity="error">No Data available for this country</Alert>;
      </div>
    );
  return (
    <div className={styles.barchart}>
      <Bar
        data={{
          labels: ["Infected", "Recovered", "Deaths", "activeCases"],
          datasets: [
            {
              label: "Poeple",
              backgroundColor: [
                "rgba(0, 0, 255, 0.5)",
                "rgba(0, 255, 0, 0.5)",
                "rgba(255, 0, 0, 0.5)",
                "rgba(192,192,192, 0.5)",
              ],
              data: [
                dataToDisplay.TotalConfirmed,
                dataToDisplay.TotalRecovered,
                dataToDisplay.TotalDeaths,
                dataToDisplay.TotalConfirmed -
                  dataToDisplay.TotalDeaths -
                  dataToDisplay.TotalRecovered,
              ],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: {
            display: true,
            text: `Current state in ${
              selectedCountry ? selectedCountry : "World"
            }`,
          },
        }}
      />
    </div>
  );
}
