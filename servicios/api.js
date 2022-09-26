class APIService {
    baseUrl = 'http://localhost:3000/api';
  
    async request(url, options) {
      try {
        const method = options?.method || 'GET'
        const headers = new Headers({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          ...(options?.headers ?? {}),
        })
  
        const response = await fetch(url, {
          ...options,
          method,
          headers,
        })
        return await response.json()
      } catch (error) {
        console.warn('Error in APIService -> request', error)
        return error
      }
    }
  
    async get(route, params, options) {
      try {
        const url = `${this.baseUrl}/${route}`
        const reqOpts = { method: 'GET', ...options }
  
        return await this.request(url, reqOpts)
      } catch (error) {
        console.warn('Error in APIService -> get', error)
        return error
      }
    }
  
    async post(route, params, options) {
      try {
        const url = `${this.baseUrl}/${route}`
        const reqOpts = { method: 'POST', ...options }
        if (params) {
          reqOpts.body = JSON.stringify(params)
        }
  
        return await this.request(url, reqOpts)
      } catch (error) {
        console.warn('Error in APIService -> post', error)
        return error
      }
    }
  
    async patch(route, params, options) {
      try {
        const url = `${this.baseUrl}/${route}`
        const reqOpts = { method: 'PATCH', ...options }
        if (params) {
          reqOpts.body = JSON.stringify(params)
        }
  
        return await this.request(url, reqOpts)
      } catch (error) {
        console.warn('Error in APIService -> patch', error)
        return error
      }
    }
  
    async delete(route, options) {
      try {
        const url = `${this.baseUrl}/${route}`
        const reqOpts = { method: 'DELETE', ...options }
  
        return await this.request(url, reqOpts)
      } catch (error) {
        console.warn('Error in APIService -> delete', error)
        return error
      }
    }
  }
  
  export default APIService