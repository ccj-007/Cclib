import request from '../axios.ts'

export const login = (data: unknown) => {
  return request.post('/api/user/login', data)
}

export const logout = () => {
  return request.post('/api/user/logout')
}