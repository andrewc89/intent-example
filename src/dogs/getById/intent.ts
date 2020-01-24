import * as SimpleJsonDb from "simple-json-db";
import { DogDbType } from "../dbType";

export class GetByIdIntent {
  constructor(
    private readonly db: SimpleJsonDb,
    private readonly id: string,
  ) {}

  public async exec(): Promise<DogDbType|undefined> {
    const dog = JSON.parse(this.db.get(this.id));
    return Promise.resolve({
      id: this.id,
      ...dog,
    });
  }
}
