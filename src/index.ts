import { DogContainer } from "./container";

const dbPath = "dogs.json";

(async () => {
  const container = new DogContainer().bind(dbPath);
  const manager = container.getManager();
  await manager.run();
})();
