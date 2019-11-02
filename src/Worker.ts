import { WORKER_DELAY_IN_MSEC, CITY_NAME, UNITS } from "./constants";
import ApiConnector from "./ApiConnector";
import Comparator from "./Comparator";

class Worker {
  comparator: Comparator;
  constructor() {
    this.comparator = new Comparator();
  }

  start(): void {
    this.sendRequestWithDelay();
  }

  private sendRequestWithDelay(delayInMSec: number = 0): void {
    setTimeout(async () => {
      try {
        const forecast = await ApiConnector.getForecast(CITY_NAME, UNITS);
        if (this.comparator.isNewMeasurementDifferent(forecast)) {
          console.log(forecast);
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
