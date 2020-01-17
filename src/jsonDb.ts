import { promises as fs } from "fs";
import { DbConfig } from "./dbConfig";

export class JsonDb {
  constructor(
    private readonly dbConfig: DbConfig,
  ) {}

  public async load(): Promise<any> {
    const rawDb = await fs.readFile(this.dbConfig.filePath);
    const db = JSON.parse(rawDb.toString());
    return db;
  }
}
