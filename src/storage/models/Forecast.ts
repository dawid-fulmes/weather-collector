import mongoose, { Schema, Document } from "mongoose";

export interface IForecast extends Document {
  coord: { lon: number; lat: number };
  weather: [{ id: number; main: string; description: string; icon: string }];
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
  visibility: number;
  wind: { speed: number; deg: number };
  clouds: { all: number };
  calculationTime: number;
}

const ForecastSchema: Schema = new Schema({
  coord: { lon: Number, lat: Number },
  weather: [{ id: Number, main: String, description: String, icon: String }],
  main: {
    temp: Number,
    pressure: Number,
    humidity: Number,
    temp_min: Number,
    temp_max: Number,
  },
  visibility: Number,
  wind: { speed: Number, deg: Number },
  clouds: { all: Number },
  calculationTime: Number,
});

export default mongoose.model<IForecast>("Forecast", ForecastSchema);
