import { EventEmitter } from "events";

import { WEATHER_HAS_CHANGED } from "./constants";
import Forecast from "./interfaces/Forecast";
import Storage from "./storage/Storage";

class EventBus extends EventEmitter {
  private storage: Storage;
  constructor(storage: Storage) {
    super();
    this.storage = storage;
    this.on(WEATHER_HAS_CHANGED, this.handleWeatherChange);
  }

  private handleWeatherChange(forecast: Forecast): void {
    console.log("NEW FORECAST:");
    console.log(forecast);
  }
}

export default EventBus;
