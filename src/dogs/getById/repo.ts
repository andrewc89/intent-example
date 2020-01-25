import * as SimpleJsonDb from "simple-json-db";
import { GetDogByIdOperation } from "./operation";

export class GetByIdRepo {
  constructor(private readonly db: SimpleJsonDb) {}

  public getById(id: string): GetDogByIdOperation {
    return new GetDogByIdOperation(this.db, id);
  }
}
