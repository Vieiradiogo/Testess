const { alojamentos } = require("../mock/alojamentos.js");

function getAllLodgings() {
  return alojamentos;
}

function filterByLocation(lista, local) {
  if (!local) return lista;
  return lista.filter(a =>
    a.localizacao.toLowerCase().includes(local.toLowerCase())
  );
}

function filterByTipo(lista, tipo) {
  if (!tipo) return lista;
  return lista.filter(a => a.tipo.toLowerCase() === tipo.toLowerCase());
}

module.exports = { getAllLodgings, filterByLocation, filterByTipo };

