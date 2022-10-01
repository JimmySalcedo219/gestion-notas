import APIService from './api'

class AsignaturasService extends APIService {
  async getAll() {
    return await this.get('/asignaturas')
  }

  async nuevo(nombreAsig) {
    return await this.post('/asignaturas', { nombreAsig })
  }

  async editar(asignatura) {
    return await this.patch('/asignaturas', asignatura)
  }

  async eliminar(id) {
    return await this.delete('/asignaturas', { id })
  }
}

export default new AsignaturasService()