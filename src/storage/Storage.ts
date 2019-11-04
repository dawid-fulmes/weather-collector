import mongoose from "mongoose";
import { CITY_NAME } from "../constants";

class Storage {
  constructor() {}

  async init() {
    try {
      await this.connectToMongoDB();
    } catch (error) {
      this.handleConnectionError(error);
    }
  }

  private handleConnectionError(error: Error): void {
    console.log("!! MondoDB Connection Error !!");
    console.log(error.message);
  }

  private async connectToMongoDB(): Promise<void> {
    await mongoose.connect(`mongodb://localhost:27017/weather-${CITY_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  }
}

export default Storage;
