import React, { useContext } from "react";
import { Context } from "../App";
export default function CountryPicker() {
  const { countries } = useContext(Context);
  return (
    <div>
      {countries.length ? (
        <select>
          {countries.map((countryData) => (
            <option key={countryData.Slug} value={countryData.Country}>
              {countryData.Country}
            </option>
          ))}
        </select>
      ) : (
        "loading"
      )}
    </div>
  );
}
