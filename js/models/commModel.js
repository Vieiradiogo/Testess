import { peregrinos } from '../mock/peregrinos.js';
import { comentarios } from '../mock/comentarios.js';

function mapPeregrinosComComentarios() {
  return peregrinos.map(user => {
    const userComments = comentarios.filter(c => c.idUtilizador === user.id);
    return { ...user, comentarios: userComments };
  });
}

export function getLeaderboard(limit = 5) {
  return [...peregrinos]
    .sort((a, b) => b.pontos - a.pontos)
    .slice(0, limit);
}

export function getRecentComments(limit = 10) {
  const combinados = [];

  peregrinos.forEach(user => {
    (user.comentarios || []).forEach(c => {
      combinados.push({
        texto: c.texto,
        data: c.data,
        utilizador: user.nome,
        avatar: user.avatarUrl || 'img/avatar-default.webp'
      });
    });
  });

  return combinados
    .sort((a, b) => new Date(b.data) - new Date(a.data))
    .slice(0, limit);
}

export function getUserRanking() {
  return peregrinos.map(user => ({
    nome: user.nome,
    avatar: user.avatarUrl,
    pontos: user.pontos,
    nivel: user.nivel,
    conquistas: user.conquistas.length,
    comentarios: (user.comentarios || []).length
  })).sort((a, b) => b.pontos - a.pontos);
}
