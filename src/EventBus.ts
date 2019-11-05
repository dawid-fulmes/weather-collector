import { EventEmitter } from "events";

import { WEATHER_HAS_CHANGED } from "./constants";
import Storage from "./storage/Storage";
import ForecastFromAPI from "./interfaces/ForecastFromAPI";

class EventBus extends EventEmitter {
  private storage: Storage;
  constructor(storage: Storage) {
    super();
    this.storage = storage;
    this.on(WEATHER_HAS_CHANGED, this.handleWeatherChange);
  }

  private handleWeatherChange(forecastFromAPI: ForecastFromAPI): void {
    this.storage.appendNewForecast(forecastFromAPI);
    const date = new Date();
    console.log(`${date} : NEW FORECAST`);
  }
}

export default EventBus;
