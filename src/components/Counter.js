import { useCountUp } from "react-countup";
import React from "react";
export default function Counter({ end }) {
  const { countUp } = useCountUp({ end, duration: 2 });
  return <div>{countUp}</div>;
}
