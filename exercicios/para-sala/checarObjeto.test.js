const checkObject = require("./checarObjeto");

describe("Tests with function allKeys", () => {
  test("if is not an object", () => {
    expect(checkObject.allKeys("string")).toEqual([])
  })

  test("if is an object", () => {
    const people = {
      name: "Kauana",
      lastName: "Tombolato"
    };

    expect(checkObject.allKeys(people)).toEqual(["name", "lastName"]);
  })
});

describe("Tests with function isObject", () => {
  test("if is not an object", () => {
    expect(checkObject.isObject("string")).toEqual(false)
  })

  test("if is an object", () => {
    expect(checkObject.isObject([])).toEqual(true)
  })
});