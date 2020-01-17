import * as path from "path";
import { JsonDbConfig } from "./dogs/db/config";
import { JsonDb } from "./dogs/db/jsonDb";
import { GetByIdRepo } from "./dogs/getById/repo";
import { DogManager } from "./dogs/manager";

const dbPath = path.join(__dirname, "./db.json");

(async () => {
  const manager = new DogManager(
    new GetByIdRepo(
      new JsonDb(new JsonDbConfig(dbPath)),
    )
  );
  await manager.run();
})();
