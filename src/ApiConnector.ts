import axios from "axios";

import { API_URL, CITY_NAME, API_KEY, UNITS } from "./constants";

class ApiConnector {
  public static async getForecast(
    city: string,
    units: "metric" | "imperial" | "standard"
  ): Promise<Forecast> {
    const params = { q: city, appid: API_KEY, units };
    const response = await axios.get(API_URL, { params });
    return response.data;
  }
}

export default ApiConnector;
