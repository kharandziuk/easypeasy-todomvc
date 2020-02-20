import axios from 'axios'

import { API_URL } from '../common/api'
import store, { resetStores } from '../store'

const apiServiceClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

apiServiceClient.interceptors.request.use(config => {
  const token = store.getState().user.token

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

apiServiceClient.interceptors.response.use(
  response => {
    return { status: response.status, data: response.data }
  },
  error => {
    if (axios.isCancel(error)) {
      return Promise.reject(error)
    } else if (error.response) {
      // Logout if token expired
      if (error.response.status === 401) {
        resetStores()
      }
      return Promise.resolve({
        isError: true,
        errorStatus: error.response.status,
        errorData: error.response.data,
        globalError:
          !error.response.data.errorCode || error.response.status === 400,
      })
    } else {
      return Promise.resolve({
        isError: true,
        globalError: true,
      })
    }
  },
)

export default apiServiceClient
