import * as SimpleJsonDb from "simple-json-db";
import { GetByIdIntent } from "./intent";

export class GetByIdRepo {
  constructor(private readonly db: SimpleJsonDb) {}

  public getById(id: string): GetByIdIntent {
    return new GetByIdIntent(this.db, id);
  }
}
