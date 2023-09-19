const Produto = require("./Produto")


describe("test with Product", () => {
  // adicionar ao estoque
  let empada
  beforeEach(() => {
    empada = new Produto("Empada", 7, 25)
  })
  test("validar adicão ao estoque", () => {
    expect(empada.adicionarAoEstoque(2)).toEqual(27)
  })

  //consulta de estoque
  test("validar o estoque", () => {
    expect(empada.consultarEstoque()).toEqual(25)
  })

  // remover do estoque quando há estoque suficiente
  test("validar remoção ao estoque", () => {
    expect(empada.removerDoEstoque(2)).toEqual(23)
  })

  // remover do estoque quando NAO há estoque suficiente
  test("validar remoção ao estoque", () => {
    expect(empada.removerDoEstoque(26)).toThrowError()
  })
})