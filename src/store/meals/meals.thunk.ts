import { createAsyncThunk } from '@reduxjs/toolkit'
import { addItemRequest, getMealsRequest } from '../../api/meals.service'
import { IAddItemRequest } from '../../common/types/types'
import { getBasket } from '../basket/basket.thunk'

export const getFoods = createAsyncThunk(
  'meals/getFoods',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getMealsRequest()

      return data.data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const addItem = createAsyncThunk(
  'basket/addItem ',
  async (payload: IAddItemRequest, { dispatch, rejectWithValue }) => {
    try {
      const response = await addItemRequest(payload)
      const { data } = response.data

      dispatch(getBasket())

      return await data.items
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
