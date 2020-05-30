import React, { useState, useEffect } from "react";
import { fetchDataFromDayOne } from "../apis/covid-19-api";
import { Line, Bar } from "react-chartjs-2";
export default function Chart({ country, status }) {
  const [dailyData, steDailyData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromDayOne(country, status);
        steDailyData(data);
        console.log(dailyData);
      } catch (error) {
        console.dir(error);
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: "",
        datasets: [{}, {}],
      }}
    />
  ) : null;
  return <h2>Chart</h2>;
}
