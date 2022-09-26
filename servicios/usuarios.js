import APIService from './api'

class UserService extends APIService {
  async getAll() {
    return await this.get('users')
  }

  async find(id) {
    return await this.get(`user/${id}`)
  }

  async create(user) {
    return await this.post('user', user)
  }

  async update(id, user) {
    return await this.patch(`user/${id}`, user)
  }

  async destroy(id) {
    return await this.delete(`user/${id}`)
  }
}

export default new UserService()