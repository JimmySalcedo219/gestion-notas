import APIService from './api'

class EstudiantesService extends APIService {
  async getAll() {
    return await this.get('/estudiantes')
  }

  async find(id) {
    return await this.get(`/estudiantes`, { id })
  }

  async nuevo(user) {
    return await this.post('/estudiantes', user)
  }

  async editar(user) {
    return await this.patch(`/estudiantes`, user)
  }

  async eliminar(id) {
    return await this.delete(`/estudiantes`, { id })
  }
}

export default new EstudiantesService()