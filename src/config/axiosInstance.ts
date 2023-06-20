import axios from 'axios'
import { store } from '../store'
import { logOut } from '../store/auth/auth.thunk'

const BASE_URL =
  'http://ec2-18-197-107-37.eu-central-1.compute.amazonaws.com:5500/api/v1'

const headers = {
  'Content-Type': 'application/json',
}

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: headers,
})

axiosInstance.interceptors.request.use(
  function (config) {
    config.headers.set('Authorization', store.getState().auth.token)
    return config
  },
  function (error) {
    return error
  }
)

axiosInstance.interceptors.response.use(
  function (config) {
    return config
  },
  function (error) {
    if (error.response.status === 401) {
      store.dispatch(logOut())
    }
    return error
  }
)
