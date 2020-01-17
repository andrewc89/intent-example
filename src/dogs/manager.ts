import { GetByIdRepo } from "./getById/repo";

export class DogManager {
  constructor(
    private readonly repo: GetByIdRepo,
  ) {}

  public async run(): Promise<void> {
    const intent = this.repo.getById(1);
    const dog = await intent.exec();
    console.log(dog);
  }
}
