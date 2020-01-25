import { CreateRepo } from "./create/repo";
import { GetByIdRepo } from "./getById/repo";

export class DogManager {
  constructor(
    private readonly createRepo: CreateRepo,
    private readonly getByIdRepo: GetByIdRepo,
  ) {}

  public async run(): Promise<void> {
    const createOp = this.createRepo.create({
      name: "Ruger",
    });
    await createOp.save();
    const getByIdOp = this.getByIdRepo.getById(createOp.id());
    await getByIdOp.exec();
    const dog = getByIdOp.dog();
    console.log(dog);
  }
}
