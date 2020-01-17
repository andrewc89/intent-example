import { promises as fs } from "fs";
import { LoadDogIntent } from "./loadDogIntent";

export class DbConfig {
  constructor(
    public readonly filePath,
  ) {}
}

export class Intepreter {
  constructor(
    private readonly dbConfig: DbConfig
  ) {}

  public async interpretIntent(intent: LoadDogIntent): Promise<any> {
    const rawDb = await fs.readFile(this.dbConfig.filePath);
    const dogs = JSON.parse(rawDb.toString());
    return dogs.find(dog => dog.id === intent.id);
  }
}
