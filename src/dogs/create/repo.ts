import { injectable, inject } from "inversify";
import * as SimpleJsonDb from "simple-json-db";
import { IDENTIFIERS } from "../../identifiers";
import { DogDbType } from "../dbType";
import { CreateDogOperation } from "./operation";

@injectable()
export class CreateDogRepo {
  constructor(
    @inject(IDENTIFIERS.JsonDb) private readonly db: SimpleJsonDb
  ) {}

  public create(dog: DogDbType): CreateDogOperation {
    return new CreateDogOperation(this.db, dog);
  }
}
