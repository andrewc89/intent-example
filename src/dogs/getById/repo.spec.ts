import "mocha";
import { assert } from "chai";
import * as SimpleJsonDb from "simple-json-db";
import { GetDogByIdRepo } from "./repo";
import { GetDogByIdOperation } from "./operation";

describe("GetByIdRepo", () => {
  describe("getById", () => {
    it("should return expected intent", () => {
      const db = new SimpleJsonDb("dogs.json");
      const repo = new GetDogByIdRepo(db);
      const actual = repo.getById("123");
      assert.deepEqual(actual, new GetDogByIdOperation(db, "123"));
    });
  });
});
