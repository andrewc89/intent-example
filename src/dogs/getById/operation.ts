import * as SimpleJsonDb from "simple-json-db";
import { DogDbType } from "../dbType";

export class GetDogByIdOperation {
  private _dog: DogDbType;
  constructor(
    private readonly db: SimpleJsonDb,
    private readonly id: string,
  ) {}

  public async exec(): Promise<void> {
    this._dog = JSON.parse(this.db.get(this.id));
    return Promise.resolve();
  }

  public dog(): DogDbType {
    return {
      id: this.id,
      ...this._dog,
    };
  }
}
