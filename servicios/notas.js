import APIService from './api'

class NotasService extends APIService {
  async getAll() {
    return await this.get('/notas')
  }

  async find(estudianteId, asignaturaId) {
    return await this.get('/notas', { estudianteId, asignaturaId })
  }

  async nuevo(nota) {
    return await this.post('/notas', nota)
  }
}

export default new NotasService()