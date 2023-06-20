import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  deleteAdminFoodsRequest,
  postAddAdminMealsRequest,
  putEditAdminMealsRequest,
} from '../../api/meals.service'
import { getFoods } from '../meals/meals.thunk'
import { IEditFormValues, IFormValues } from '../../common/types/types'

export const postAdminMeals = createAsyncThunk(
  'meals/postAddAdminMeals',
  async (payload: IFormValues, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await postAddAdminMealsRequest(payload)

      dispatch(getFoods())

      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const editAdminMeals = createAsyncThunk(
  'meals/editAdminMeals',
  async (payload: IEditFormValues, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await putEditAdminMealsRequest(payload)

      dispatch(getFoods())

      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const deleteAdminFoods = createAsyncThunk(
  'meals/deleteAdminFoods',
  async (payload: string, { dispatch, rejectWithValue }) => {
    try {
      const response = await deleteAdminFoodsRequest(payload)

      dispatch(getFoods())

      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
