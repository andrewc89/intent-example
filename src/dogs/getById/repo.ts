import { JsonDb } from "../db/jsonDb";
import { DogDbType } from "../dbType";
import { GetByIdIntent } from "./intent";

export class GetByIdRepo {
  constructor(
    private readonly db: JsonDb<DogDbType>
  ) {}

  public getById(id: number): GetByIdIntent {
    return new GetByIdIntent(this.db, id);
  }
}
