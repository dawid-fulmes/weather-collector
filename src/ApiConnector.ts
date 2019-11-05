import axios from "axios";

import { API_URL } from "./constants";
import { API_KEY } from "./config/config";
import ForecastFromAPI from "./interfaces/ForecastFromAPI";

class ApiConnector {
  static async getForecast(
    city: string,
    units: "metric" | "imperial" | "standard"
  ): Promise<ForecastFromAPI> {
    const params = { q: city, appid: API_KEY, units };
    const response = await axios.get(API_URL, { params });
    return response.data;
  }

  public static handleError(error: Error): void {
    console.log("!! Api connection error occurred !!");
    console.log(error.message);
  }
}

export default ApiConnector;
