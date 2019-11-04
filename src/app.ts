import Worker from "./Worker";
import EventBus from "./EventBus";
import Storage from "./storage/Storage";

(async () => {
  const storage = new Storage();
  await storage.init();
  const eventBus = new EventBus(storage);
  const worker = new Worker(eventBus);
  worker.start();
})();
