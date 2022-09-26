import APIService from './api'

class AuthService extends APIService {
  async login(username, password) {
    return await this.post('/login', { username, password })
  }

  async register(user) {
    return await this.post('/auth/register', { ...user })
  }
}

export default new AuthService()