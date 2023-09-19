const jokenpo = require("./jokenpo");
const ckeckWinnerPlayer = require("./jokenpo")

describe("Jokenpo function", () => {
  test("if the both player draw validation", () => {
    expect(jokenpo("pedra", "pedra")).toEqual("Empate!")
  });
  test("Validation to check if the player 1 win", () => {
    expect(jokenpo("pedra", "tesoura")).toEqual("Jogador 1 venceu!")
  });
  test("Validation to check if the player 2 win", () => {
    expect(jokenpo("papel", "tesoura")).toEqual("Jogador 2 venceu!")
  });
  test("if not an option", () => {
    expect(jokenpo("batata","batata")).error
  })
})
