import {
  WORKER_DELAY_IN_MSEC,
  CITY_NAME,
  UNITS,
  WEATHER_HAS_CHANGED,
} from "./constants";
import ApiConnector from "./ApiConnector";
import Comparator from "./Comparator";
import EventBus from "./EventBus";

class Worker {
  comparator: Comparator;
  eventBus: EventBus;
  constructor() {
    this.comparator = new Comparator();
    this.eventBus = new EventBus();
  }

  start(): void {
    this.sendRequestWithDelay();
  }

  private sendRequestWithDelay(delayInMSec: number = 0): void {
    setTimeout(async () => {
      try {
        const forecast = await ApiConnector.getForecast(CITY_NAME, UNITS);
        if (this.comparator.isNewMeasurementDifferent(forecast)) {
          this.eventBus.emit(WEATHER_HAS_CHANGED, forecast);
        } else {
          console.log("No changes");
        }
      } catch (error) {
        ApiConnector.handleError(error);
      }

      this.sendRequestWithDelay(WORKER_DELAY_IN_MSEC);
    }, delayInMSec);
  }
}

export default Worker;
