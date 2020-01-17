import { promises as fs } from "fs";
import { DbConfig } from "./dbConfig";

export class LoadDogIntent {
  constructor(
    private readonly dbConfig: DbConfig,
    private readonly id: number,
  ) {}

  public async exec(): Promise<any> {
    const rawDb = await fs.readFile(this.dbConfig.filePath);
    const dogs = JSON.parse(rawDb.toString());
    return dogs.find(dog => dog.id === this.id);
  }
}
