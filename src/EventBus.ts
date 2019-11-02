import { EventEmitter } from "events";
import { WEATHER_HAS_CHANGED } from "./constants";

class EventBus extends EventEmitter {
  constructor() {
    super();

    this.on(WEATHER_HAS_CHANGED, this.handleWeatherChange);
  }

  private handleWeatherChange(forecast: Forecast): void {
    console.log("NEW FORECAST:");
    console.log(forecast);
  }
}

export default EventBus;
