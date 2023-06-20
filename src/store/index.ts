import { configureStore } from '@reduxjs/toolkit'
import { mealsSlice } from './meals/meals.slice'
import { authSlice } from './auth/auth.slice'
import { snackbarSlice } from './snackbar/snackbar.slice'
import { basketSlice } from './basket/basket.slice'

export const store = configureStore({
  reducer: {
    [mealsSlice.name]: mealsSlice.reducer,
    [authSlice.name]: authSlice.reducer,
    [snackbarSlice.name]: snackbarSlice.reducer,
    [basketSlice.name]: basketSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
