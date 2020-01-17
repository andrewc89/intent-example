import * as path from "path";
import { LoadDogIntent } from "./loadDogIntent";
import { Intepreter, DbConfig } from "./interpreter";

const dbPath = path.join(__dirname, "./db.json");

(async () => {
  const intent = new LoadDogIntent(1);
  const interpreter = new Intepreter(new DbConfig(dbPath));
  const dog = await interpreter.interpretIntent(intent);
  console.log(JSON.stringify(dog));
})();
