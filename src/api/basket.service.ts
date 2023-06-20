import { IAddItemRequest } from '../common/types/types'
import { axiosInstance } from '../config/axiosInstance'

export const getBasketRequest = () => {
  return axiosInstance.get('/basket')
}

export const incrementFoodRequest = (data: IAddItemRequest) => {
  const requestData = {
    amount: data.amount + 1,
  }

  console.log('requestData: ', requestData)
  return axiosInstance.put(`/basketItem/${data.id}/update`, requestData)
}

export const putDecrementFoodRequest = (data: IAddItemRequest) => {
  const requestData = {
    amount: data.amount,
  }

  return axiosInstance.put(`/basketItem/${data.id}/update`, requestData)
}

export const deleteDecrementFoodRequest = (data: IAddItemRequest) => {
  return axiosInstance.delete(`/basketItem/${data.id}/delete`)
}
