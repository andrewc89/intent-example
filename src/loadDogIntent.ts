import { JsonDb } from "./jsonDb";

export class LoadDogIntent {
  constructor(
    private readonly jsonDb: JsonDb,
    private readonly id: number,
  ) {}

  public async exec(): Promise<any> {
    const dogs = await this.jsonDb.load();
    return dogs.find(dog => dog.id === this.id);
  }
}
