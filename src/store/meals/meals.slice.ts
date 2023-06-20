import { createSlice } from '@reduxjs/toolkit'
import { IMeals } from '../../common/types/types'
import { getFoods } from './meals.thunk'

interface initialType {
  isLoading: boolean
  meals: IMeals[]
  isError: string
}

const initialState: initialType = {
  isLoading: false,
  meals: [],
  isError: '',
}

export const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFoods.fulfilled, (state, action) => {
      state.isLoading = false
      state.meals = action.payload
    })
    builder.addCase(getFoods.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getFoods.rejected, (state) => {
      state.isLoading = false
      state.isError = 'Something went wrong'
    })
  },
})

export const ActionsType = mealsSlice.actions
