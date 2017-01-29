import { TestBed } from "@angular/core/testing";

import {} from "jasmine";

import { KeysPipe } from "./keys.pipe";

describe("KeysPipe", () =>
{
  beforeEach(() =>
  {
    TestBed.configureTestingModule(
    {
      declarations: [ KeysPipe ],
    });
  });

  it("should transform", () =>
  {
    let pipe: KeysPipe = new KeysPipe;
    let toTest = {
      id: 5,
      name: "Test",
      next: { id: 2, name: "KeysPipe" }
    };
    let keys = pipe.transform(toTest);

    expect(keys[0].key).toBe("id");
    expect(keys[0].value).toBe(5);
    expect(keys[1].key).toBe("name");
    expect(keys[1].value).toBe("Test");
    expect(keys[2].key).toBe("next");
    expect(keys[2].value.id).toBe(2);
    expect(keys[2].value.name).toBe("KeysPipe");
  });
});
