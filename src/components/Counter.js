import { useCountUp } from "react-countup";
import React, { useEffect } from "react";
export default function Counter({ end }) {
  useEffect(() => {
    update(end);
  }, [end]);
  const { countUp, update } = useCountUp({
    start: 0,
    end,
    duration: 2,
    separator: ",",
  });

  return <div>{countUp}</div>;
}
