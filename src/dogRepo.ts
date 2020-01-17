import { DbConfig } from "./dbConfig";
import { LoadDogIntent } from "./loadDogIntent";

export class DogRepo {
  constructor(
    private readonly dbConfig: DbConfig,
  ) {}

  public getById(id: number): LoadDogIntent {
    return new LoadDogIntent(
      this.dbConfig,
      id,
    );
  }
}
