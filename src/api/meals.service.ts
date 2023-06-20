import {
  IAddItemRequest,
  IEditFormValues,
  IFormValues,
} from '../common/types/types'
import { axiosInstance } from '../config/axiosInstance'

export const getMealsRequest = () => {
  return axiosInstance.get('/foods')
}

export const addItemRequest = (data: IAddItemRequest) => {
  const requestData = {
    amount: data.amount,
  }

  return axiosInstance.post(`/foods/${data.id}/addToBasket`, requestData)
}

export const postAddAdminMealsRequest = (data: IFormValues) => {
  return axiosInstance.post('/foods', data)
}

export const putEditAdminMealsRequest = (data: IEditFormValues) => {
  const newEditData = {
    price: data.price,
    title: data.title,
    description: data.description,
  }

  return axiosInstance.put(`/foods/${data._id}`, newEditData)
}

export const deleteAdminFoodsRequest = (id: string) => {
  return axiosInstance.delete(`/foods/${id}`)
}

export const getMealById = (id: string | null) => {
  return axiosInstance.get(`/foods/${id}`)
}
