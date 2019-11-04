import isEqual from "lodash.isequal";
import Forecast from "./interfaces/Forecast";

class Comparator {
  private lastMeasurement: null | Forecast;

  constructor() {
    this.lastMeasurement = null;
  }

  isNewMeasurementDifferent(newMeasurement: Forecast): boolean {
    if (isEqual(this.lastMeasurement, newMeasurement)) {
      return false;
    }
    this.updateLastMeasurement(newMeasurement);
    return true;
  }

  private updateLastMeasurement(newMeasurement: Forecast): void {
    this.lastMeasurement = newMeasurement;
  }
}

export default Comparator;
