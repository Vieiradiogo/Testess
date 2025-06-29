/**
 * Calcula a pontuação final de um quiz.
 * @param {number} base - Número de respostas certas
 * @param {number} multiplicador - Valor fixo por resposta certa (default: 10)
 * @returns {number} Pontuação final
 */
export function calcularPontuacao(base, multiplicador = 10) {
  return base * multiplicador;
}

export function calcularNivel(pontos) {
  if (pontos >= 1000) return 5;
  if (pontos >= 600) return 4;
  if (pontos >= 300) return 3;
  if (pontos >= 100) return 2;
  return 1;
}
