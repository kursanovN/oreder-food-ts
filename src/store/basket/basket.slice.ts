import { createSlice } from '@reduxjs/toolkit'
import { getBasket } from './basket.thunk'
import { IMeals } from '../../common/types/types'
// import { IRowsTable } from '../../common/types/types'
// import { addItem, decrementFood, getBasket, incrementFood } from './basketThunk'

interface IInitial {
  isLoading: boolean
  basket: IMeals[]
}

const initialState: IInitial = {
  isLoading: false,
  basket: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBasket.fulfilled, (state, action) => {
        state.basket = action.payload
        state.isLoading = false
      })
      .addCase(getBasket.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getBasket.rejected, (state) => {
        state.isLoading = false
      })

    //   builder
    //     .addCase(incrementFood.fulfilled, (state) => {
    //       state.isLoading = false
    //     })
    //     .addCase(incrementFood.pending, (state) => {
    //       state.isLoading = true
    //     })
    //     .addCase(incrementFood.rejected, (state) => {
    //       state.isLoading = false
    //     })

    //   builder
    //     .addCase(decrementFood.fulfilled, (state) => {
    //       state.isLoading = false
    //     })
    //     .addCase(decrementFood.pending, (state) => {
    //       state.isLoading = true
    //     })
    //     .addCase(decrementFood.rejected, (state) => {
    //       state.isLoading = false
    //     })
  },
})
