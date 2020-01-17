import * as path from "path";
import { JsonDbConfig } from "./dogs/db/config";
import { JsonDb } from "./dogs/db/jsonDb";
import { GetByIdRepo } from "./dogs/getById/repo";

const dbPath = path.join(__dirname, "./db.json");

(async () => {
  const repo = new GetByIdRepo(
    new JsonDb(new JsonDbConfig(dbPath)),
  );
  const dog = await repo.getById(1).exec();
  console.log(JSON.stringify(dog));
})();
