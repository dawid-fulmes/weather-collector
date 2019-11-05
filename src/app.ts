import Worker from "./Worker";
import EventBus from "./EventBus";
import Storage from "./storage/Storage";

(async () => {
  const storage = new Storage();
  await storage.init();
  const lastForecast = await storage.getLastForecast();
  const eventBus = new EventBus(storage);
  const worker = new Worker(eventBus, lastForecast);
  worker.start();
})();
