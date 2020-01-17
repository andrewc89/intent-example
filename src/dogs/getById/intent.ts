import { JsonDb } from "../db/jsonDb";
import { DogDbType } from "../dbType";

export class GetByIdIntent {
  constructor(
    private readonly jsonDb: JsonDb<DogDbType>,
    private readonly id: number,
  ) {}

  public async exec(): Promise<DogDbType|undefined> {
    const dogs = await this.jsonDb.load();
    return dogs.find(dog => dog.id === this.id);
  }
}
