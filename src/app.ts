import Adapter from "./ApiConnector";
import ApiConnector from "./ApiConnector";
import { CITY_NAME, UNITS } from "./constants";
import { fips } from "crypto";

(async () => {
  const forecast = await ApiConnector.getForecast(CITY_NAME, UNITS);
  console.log(forecast);
})();
