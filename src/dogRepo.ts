import { JsonDb } from "./jsonDb";
import { LoadDogIntent } from "./loadDogIntent";

export class DogRepo {
  constructor(
    private readonly db: JsonDb
  ) {}

  public getById(id: number): LoadDogIntent {
    return new LoadDogIntent(
      this.db,
      id,
    );
  }
}
