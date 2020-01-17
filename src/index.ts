import * as path from "path";
import { DbConfig } from "./dbConfig";
import { DogRepo } from "./dogRepo";

const dbPath = path.join(__dirname, "./db.json");

(async () => {
  const repo = new DogRepo(
    new DbConfig(dbPath)
  );
  const dog = await repo.getById(1).exec();
  console.log(JSON.stringify(dog));
})();
