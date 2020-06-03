import axios from "axios";
const covid19Api = axios.create({ baseURL: "https://api.covid19api.com" });
export const fetchDataFromDayOne = async (countryName, status) => {
  const { data } = await covid19Api.get(
    `/total/dayone/country/${countryName}/status/${status}`
  );
  console.log(data);
  return data;
};

export default covid19Api;
