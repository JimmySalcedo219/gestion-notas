import APIService from './api'

class DocentesService extends APIService {
  async getAll() {
    return await this.get('/docentes')
  }

  async find(id) {
    return await this.get(`/docentes`, { id })
  }

  async nuevo(user) {
    return await this.post('/docentes', user)
  }

  async editar(user) {
    return await this.patch(`/docentes`, user)
  }

  async eliminar(id) {
    return await this.delete(`/docentes`, { id })
  }
}

export default new DocentesService()