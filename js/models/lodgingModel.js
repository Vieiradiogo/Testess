import { alojamentos } from "../mock/alojamentos.js";

export function getAllLodgings() {
  return alojamentos;
}

export function filterByLocation(lista, local) {
  if (!local) return lista;
  return lista.filter(a =>
    a.localizacao.toLowerCase().includes(local.toLowerCase())
  );
}

export function filterByTipo(lista, tipo) {
  if (!tipo) return lista;
  return lista.filter(a => a.tipo.toLowerCase() === tipo.toLowerCase());
}
