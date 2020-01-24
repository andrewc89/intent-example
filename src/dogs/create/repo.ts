import * as SimpleJsonDb from "simple-json-db";
import { DogDbType } from "../dbType";
import { CreateOperation } from "./operation";

export class CreateRepo {
  constructor(private readonly db: SimpleJsonDb) {}

  public create(dog: DogDbType): CreateOperation {
    return new CreateOperation(this.db, dog);
  }
}
