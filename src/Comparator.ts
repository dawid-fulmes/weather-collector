import ForecastFromAPI from "./interfaces/ForecastFromAPI";
import { IForecast } from "./storage/models/Forecast";

class Comparator {
  private lastCalculationTime: null | number;

  constructor(lastForecast: IForecast | null = null) {
    if (lastForecast === null) {
      this.lastCalculationTime = null;
      return;
    }
    this.lastCalculationTime = lastForecast.calculationTime;
  }

  isNewMeasurementDifferent(newMeasurement: ForecastFromAPI): boolean {
    if (this.lastCalculationTime === newMeasurement.dt) {
      return false;
    }
    this.updateLastCalculationTime(newMeasurement.dt);
    return true;
  }

  private updateLastCalculationTime(newCalculationTime: number): void {
    this.lastCalculationTime = newCalculationTime;
  }
}

export default Comparator;
