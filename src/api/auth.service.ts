import { ISignInResponse, ISignIn, ISignUp } from '../common/types/types'
import { axiosInstance } from '../config/axiosInstance'

export const postSignInRequest = (data: ISignIn) => {
  return axiosInstance.post<ISignInResponse>('/auth/login', data)
}

export const postSignUpRequest = (data: ISignUp) => {
  return axiosInstance.post<ISignInResponse>('/auth/register', data)
}
