function calcularPontuacao(base, multiplicador = 10) {
  return base * multiplicador;
}

function calcularNivel(pontos) {
  if (pontos >= 1000) return 5;
  if (pontos >= 600) return 4;
  if (pontos >= 300) return 3;
  if (pontos >= 100) return 2;
  return 1;
}

module.exports = { calcularPontuacao, calcularNivel };


describe("Função calcularPontuacao", () => {
  test("Deve retornar 50 quando base é 5 e multiplicador 10", () => {
    expect(calcularPontuacao(5, 10)).toBe(50);
  });

  test("Deve usar multiplicador default (10) quando não é fornecido", () => {
    expect(calcularPontuacao(3)).toBe(30);
  });

  test("Deve retornar 0 quando base é 0", () => {
    expect(calcularPontuacao(0)).toBe(0);
  });
});

describe("Função calcularNivel", () => {
  test("Deve retornar nível 1 para pontos abaixo de 100", () => {
    expect(calcularNivel(50)).toBe(1);
  });

  test("Deve retornar nível 2 para pontos entre 100 e 299", () => {
    expect(calcularNivel(150)).toBe(2);
  });

  test("Deve retornar nível 3 para pontos entre 300 e 599", () => {
    expect(calcularNivel(400)).toBe(3);
  });

  test("Deve retornar nível 4 para pontos entre 600 e 999", () => {
    expect(calcularNivel(700)).toBe(4);
  });

  test("Deve retornar nível 5 para pontos acima de 1000", () => {
    expect(calcularNivel(1200)).toBe(5);
  });
});
