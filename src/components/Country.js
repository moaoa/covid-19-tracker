import React from "react";
export default function Country(props) {
  return <>{props.match.params.country}</>;
}
