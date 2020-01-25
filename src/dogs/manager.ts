import { injectable, inject } from "inversify";

import { IDENTIFIERS } from "../identifiers";
import { CreateDogRepo } from "./create/repo";
import { GetDogByIdRepo } from "./getById/repo";

@injectable()
export class DogManager {
  constructor(
    @inject(IDENTIFIERS.CreateDogRepo) private readonly createRepo: CreateDogRepo,
    @inject(IDENTIFIERS.GetDogByIdRepo) private readonly getByIdRepo: GetDogByIdRepo,
  ) {}

  public async run(): Promise<void> {
    const createOp = this.createRepo.create({ name: "Ruger" });
    await createOp.save();
    const getByIdOp = this.getByIdRepo.getById(createOp.id());
    await getByIdOp.exec();
    const dog = getByIdOp.dog();
    console.log(dog);
  }
}
