import { WORKER_DELAY_IN_MSEC, CITY_NAME, UNITS } from "./constants";
import ApiConnector from "./ApiConnector";

class Worker {
  constructor() {}

  start(): void {
    this.sendRequestWithDelay();
  }

  private sendRequestWithDelay(delayInMSec: number = 0): void {
    setTimeout(async () => {
      const forecast = await ApiConnector.getForecast(CITY_NAME, UNITS);
      console.log(forecast);
      this.sendRequestWithDelay(WORKER_DELAY_IN_MSEC);
    }, delayInMSec);
  }
}

export default Worker;
