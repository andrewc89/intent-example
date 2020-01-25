import { injectable, inject } from "inversify";
import * as SimpleJsonDb from "simple-json-db";
import { IDENTIFIERS } from "../../identifiers";
import { GetDogByIdOperation } from "./operation";

@injectable()
export class GetDogByIdRepo {
  constructor(
    @inject(IDENTIFIERS.JsonDb) private readonly db: SimpleJsonDb
  ) {}

  public getById(id: string): GetDogByIdOperation {
    return new GetDogByIdOperation(this.db, id);
  }
}
