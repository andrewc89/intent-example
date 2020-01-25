import * as SimpleJsonDb from "simple-json-db";
import { DogDbType } from "../dbType";
import { CreateDogOperation } from "./operation";

export class CreateRepo {
  constructor(private readonly db: SimpleJsonDb) {}

  public create(dog: DogDbType): CreateDogOperation {
    return new CreateDogOperation(this.db, dog);
  }
}
