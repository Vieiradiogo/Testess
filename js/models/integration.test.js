const { calcularPontuacao, calcularNivel } = require("./gamificationModel.js");
const { filterByLocation } = require("./lodgingModel.js");

describe("Fluxos completos de integração", () => {
  test("Fluxo de quiz: calcular pontuação + calcular nível", () => {
    const respostasCertas = 15;
    const multiplicador = 10;

    const pontos = calcularPontuacao(respostasCertas, multiplicador);
    const nivel = calcularNivel(pontos);

    expect(pontos).toBe(150);
    expect(nivel).toBe(2); // 150 pontos corresponde ao nível 2
  });

  test("Fluxo combinado de alojamentos: filtrar por localização", () => {
    const alojamentosMock = [
      { nome: "Albergue do Caminho", localizacao: "Porto", tipo: "Albergue" },
      { nome: "Casa do Peregrino", localizacao: "Lisboa", tipo: "Casa" },
      { nome: "Hostel Santiago", localizacao: "Santiago", tipo: "Hostel" },
      { nome: "Refúgio do Norte", localizacao: "Porto", tipo: "Refúgio" }
    ];

    const filtradosPorto = filterByLocation(alojamentosMock, "porto");

    expect(filtradosPorto).toEqual([
      { nome: "Albergue do Caminho", localizacao: "Porto", tipo: "Albergue" },
      { nome: "Refúgio do Norte", localizacao: "Porto", tipo: "Refúgio" }
    ]);
  });
});
