import APIService from './api'

class GruposService extends APIService {
  async getAll() {
    return await this.get('/grupos')
  }

  async nuevo(nomgrupo) {
    return await this.post('/grupos', { nomgrupo })
  }

  async editar(grupo) {
    return await this.patch('/grupos', grupo)
  }

  async eliminar(id) {
    return await this.delete('/grupos', { id })
  }
}

export default new GruposService()