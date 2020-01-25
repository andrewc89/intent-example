import "reflect-metadata";
import { Container } from "inversify";
const SimpleJsonDb = require('simple-json-db');

import { IDENTIFIERS } from "./identifiers";
import { CreateDogRepo } from "./dogs/create/repo";
import { GetDogByIdRepo } from "./dogs/getById/repo";
import { DogManager } from "./dogs/manager";

export class DogContainer {
  private readonly container: Container;
  constructor() {
    this.container = new Container();
  }

  public bind(dbPath: string): DogContainer {
    this.container.bind(IDENTIFIERS.JsonDb).toConstantValue(new SimpleJsonDb(dbPath));
    this.container.bind(IDENTIFIERS.CreateDogRepo).to(CreateDogRepo);
    this.container.bind(IDENTIFIERS.GetDogByIdRepo).to(GetDogByIdRepo);
    this.container.bind(IDENTIFIERS.DogManager).to(DogManager);
    return this;
  }

  public getManager(): DogManager {
    return this.container.get(IDENTIFIERS.DogManager);
  }
}
