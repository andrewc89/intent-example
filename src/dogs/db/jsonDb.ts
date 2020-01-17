import { promises as fs } from "fs";
import { JsonDbConfig } from "./config";

export class JsonDb<T> {
  constructor(
    private readonly config: JsonDbConfig,
  ) {}

  public async load(): Promise<T[]> {
    const rawDb = await fs.readFile(this.config.filePath);
    const db = JSON.parse(rawDb.toString());
    return db;
  }
}
