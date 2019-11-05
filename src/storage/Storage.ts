import mongoose from "mongoose";
import { CITY_NAME } from "../config/config";
import Forecast, { IForecast } from "./models/Forecast";
import APIForecastUpdate from "../API/APIForecastUpdate";

class Storage {
  constructor() {}

  async init() {
    try {
      await this.connectToMongoDB();
    } catch (error) {
      this.handleConnectionError(error);
    }
  }

  async appendNewForecast(forecastFromAPI: APIForecastUpdate): Promise<void> {
    const forecast = new Forecast({
      coord: forecastFromAPI.coord,
      weather: forecastFromAPI.weather,
      main: forecastFromAPI.main,
      visibility: forecastFromAPI.visibility,
      wind: forecastFromAPI.wind,
      clouds: forecastFromAPI.clouds,
      calculationTime: forecastFromAPI.dt,
    });
    await forecast.save();
  }

  async getLastForecast(): Promise<IForecast | null> {
    const lastForecast = await Forecast.findOne().sort({ calculationTime: -1 });
    return lastForecast;
  }

  private handleConnectionError(error: Error): void {
    console.log("!! MondoDB Connection Error !!");
    console.log(error.message);
  }

  private async connectToMongoDB(): Promise<void> {
    await mongoose.connect(`mongodb://localhost:27017/weather-${CITY_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  }
}

export default Storage;
