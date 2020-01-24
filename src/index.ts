import * as SimpleJsonDb from "simple-json-db";

import { CreateRepo } from "./dogs/create/repo";
import { GetByIdRepo } from "./dogs/getById/repo";
import { DogManager } from "./dogs/manager";

const dbPath = "dogs.json";

(async () => {
  const db = new SimpleJsonDb(dbPath);
  const manager = new DogManager(
    new CreateRepo(db),
    new GetByIdRepo(db),
  );
  await manager.run();
})();
