import "mocha";
import { assert } from "chai";
import { GetByIdRepo } from "./repo";
import { JsonDb } from "../db/jsonDb";
import { DogDbType } from "../dbType";
import { JsonDbConfig } from "../db/config";
import { GetByIdIntent } from "./intent";

describe("GetByIdRepo", () => {
  describe("getById", () => {
    it("should return expected intent", () => {
      const db = new JsonDb<DogDbType>(
        new JsonDbConfig("abc"),
      );
      const repo = new GetByIdRepo(db);
      const actual = repo.getById(123);
      assert.deepEqual(actual, new GetByIdIntent(db, 123));
    });
  });
});
