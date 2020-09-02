// Imports
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  (config) => {
    let token = null
    try {
      const user = JSON.parse(localStorage.getItem('user'))
      token = user.token
    } catch (error) {}

    if (token) {
      config.headers['authorization'] = `${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)
export default api
