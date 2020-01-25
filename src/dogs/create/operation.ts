import * as SimpleJsonDb from "simple-json-db";
import * as uuidv4 from 'uuid/v4';
import { DogDbType } from "../dbType";

export class CreateDogOperation {
  private _id: string;
  constructor(
    private readonly db: SimpleJsonDb,
    private readonly dog: DogDbType,
  ) {
    this._id = uuidv4();
  }

  public async save(): Promise<void> {
    this.db.set(this._id, JSON.stringify(this.dog));
    return Promise.resolve();
  }

  public id(): string {
    return this._id;
  }
}
