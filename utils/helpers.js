import { APP_ROUTES, MESSAGES } from './constants.js';
import { appState } from '../js/appState.js';

export function setupNavigation() {
  document.querySelectorAll('[data-auth]').forEach(link => {
    link.addEventListener('click', (e) => {
      if (!appState.isAuthenticated()) {
        e.preventDefault();
        alert(MESSAGES.AUTH_ERROR);
        window.location.href = APP_ROUTES.LOGIN;
      }
    });
  });
}

/**
 * Redireciona para rota específica
 * @param {string} routeKey - Chave de APP_ROUTES (ex: 'HOME')
 */
export function navigateTo(routeKey) {
  window.location.href = APP_ROUTES[routeKey];
}

export function formatDistance(meters) {
  return meters >= 1000 
    ? `${(meters / 1000).toFixed(1)} km` 
    : `${meters} m`;
}

export function formatDate(dateString) {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('pt-PT', options);
}

export function toggleAuthElements() {
  document.querySelectorAll('[data-auth-only]').forEach(el => {
    el.style.display = appState.isAuthenticated() ? 'block' : 'none';
  });

  document.querySelectorAll('[data-guest-only]').forEach(el => {
    el.style.display = appState.isAuthenticated() ? 'none' : 'block';
  });
}