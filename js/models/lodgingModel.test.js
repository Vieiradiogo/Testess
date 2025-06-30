function filterByLocation(lista, local) {
  if (!local) return lista;
  return lista.filter(a =>
    a.localizacao.toLowerCase().includes(local.toLowerCase())
  );
}

module.exports = { filterByLocation };


describe("Função filterByLocation", () => {
  const alojamentosMock = [
    { nome: "Albergue do Caminho", localizacao: "Porto", tipo: "Albergue" },
    { nome: "Casa do Peregrino", localizacao: "Lisboa", tipo: "Casa" },
    { nome: "Hostel Santiago", localizacao: "Santiago", tipo: "Hostel" }
  ];

  test("Deve retornar todos os alojamentos quando local for vazio ou undefined", () => {
    expect(filterByLocation(alojamentosMock, "")).toEqual(alojamentosMock);
    expect(filterByLocation(alojamentosMock)).toEqual(alojamentosMock);
  });

  test("Deve filtrar corretamente por localização (case insensitive)", () => {
    const resultado = filterByLocation(alojamentosMock, "porto");
    expect(resultado).toEqual([{ nome: "Albergue do Caminho", localizacao: "Porto", tipo: "Albergue" }]);
  });

  test("Deve retornar array vazio quando não houver alojamentos que correspondam", () => {
    const resultado = filterByLocation(alojamentosMock, "Madrid");
    expect(resultado).toEqual([]);
  });
});
