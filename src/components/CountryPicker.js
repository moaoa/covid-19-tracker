import React, { useContext, useState } from "react";
import { Context } from "../App";
import { useHistory } from "react-router-dom";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./CountryPicker.module.css";
export default function CountryPicker() {
  const [selectValue, setSelectValue] = useState("");
  const { countries, setSelectedCountry } = useContext(Context);
  const history = useHistory();
  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectValue(e.target.value);
    history.push("/" + e.target.value);
  };

  return (
    <div className={styles.countryPicker}>
      {countries.length ? (
        <FormControl className={styles.FormControl} onChange={handleChange}>
          <NativeSelect value={selectValue}>
            <option key={Date.now()} value={""} selected>
              Global
            </option>
            {countries.map((countryData) => (
              <option key={countryData.Slug} value={countryData.Slug}>
                {countryData.Country}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      ) : (
        "loading"
      )}
    </div>
  );
}
