import axios from "axios";

import { API_URL, API_KEY } from "./constants";
import Forecast from "./interfaces/Forecast";

class ApiConnector {
  public static async getForecast(
    city: string,
    units: "metric" | "imperial" | "standard"
  ): Promise<Forecast> {
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
