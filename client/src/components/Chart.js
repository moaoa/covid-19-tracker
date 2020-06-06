import React, { useState, useEffect, useContext } from "react";
import { fetchDataFromDayOne } from "../apis/covid-19-api";
import { Line, Bar } from "react-chartjs-2";
import { Context } from "../App";
import styles from "./Chart.module.css";
export default function Chart() {
  const { selectedCountry } = useContext(Context);
  const [confirmedDailyData, setConfirmedDailyData] = useState([]);
  const [recoveredDailyData, setRecoveredDailyData] = useState([]);
  const [deathsDailyData, setDeathsDailyData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setConfirmedDailyData(
          await fetchDataFromDayOne(selectedCountry, "confirmed")
        );
        setRecoveredDailyData(
          await fetchDataFromDayOne(selectedCountry, "recovered")
        );
        setDeathsDailyData(
          await fetchDataFromDayOne(selectedCountry, "deaths")
        );
      } catch (error) {
        console.dir(error);
        console.log(error.message);
      }
    };
    fetchData();
  }, [selectedCountry]);
  if (!selectedCountry) return <h2>No country selected</h2>;
  const lineChart = confirmedDailyData[0] ? (
    <div className={styles.chart}>
      <Line
        data={{
          labels: confirmedDailyData.map(({ Date: date }) =>
            new Date(date).toDateString()
          ),
          datasets: [
            confirmedDailyData[0]
              ? {
                  data: extractCases(confirmedDailyData),
                  label: "Infected",
                  borderColor: "#3333ff",
                  fill: true,
                }
              : {},
            recoveredDailyData[0]
              ? {
                  data: extractCases(recoveredDailyData),
                  label: "Recovered",
                  borderColor: "#0f0",
                  fill: true,
                }
              : {},
            deathsDailyData[0]
              ? {
                  data: extractCases(deathsDailyData),
                  label: "Deaths",
                  borderColor: "red",
                  fill: true,
                }
              : {},
          ],
        }}
      />
    </div>
  ) : null;
  return lineChart;
}
function extractCases(pieceOfState) {
  return pieceOfState.map(({ Cases }) => Cases);
}
