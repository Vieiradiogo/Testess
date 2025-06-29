import { caminhos } from '../js/mock/caminhos.js';
import { alojamentos } from '../js/mock/alojamentos.js';
import { peregrinos } from '../js/mock/peregrinos.js';

export class MockService {
  static async fetchCaminhos() {
    return caminhos;
  }

  static async fetchCaminhoById(id) {
    return caminhos.find(c => c.id === id);
  }

  static async fetchAlojamentos() {
    return alojamentos;
  }

  static async fetchAlojamentoByCaminhoId(caminhoId) {
    return alojamentos.filter(a => a.caminhoId === caminhoId);
  }

  static async fetchPeregrinoById(id) {
    return peregrinos.find(p => p.id === id);
  }


}