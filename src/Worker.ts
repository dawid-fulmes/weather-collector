import { WORKER_DELAY_IN_MSEC, CITY_NAME, UNITS } from "./config/config";
import { WEATHER_HAS_CHANGED } from "./constants";
import ApiConnector from "./ApiConnector";
import Comparator from "./Comparator";
import EventBus from "./EventBus";
import { IForecast } from "./storage/models/Forecast";

class Worker {
  comparator: Comparator;
  eventBus: EventBus;
  constructor(eventBus: EventBus, lastForecast: IForecast | null) {
    this.comparator = new Comparator(lastForecast);
    this.eventBus = eventBus;
  }

  start(): void {
    console.log("WORKER IS RUNNING");
    this.sendRequestWithDelay();
  }

  private sendRequestWithDelay(delayInMSec: number = 0): void {
    setTimeout(async () => {
      try {
        const forecast = await ApiConnector.getForecast(CITY_NAME, UNITS);
        if (this.comparator.isNewMeasurementDifferent(forecast)) {
          this.eventBus.emit(WEATHER_HAS_CHANGED, forecast);
        }
      } catch (error) {
        ApiConnector.handleError(error);
      }

      this.sendRequestWithDelay(WORKER_DELAY_IN_MSEC);
    }, delayInMSec);
  }
}

export default Worker;
