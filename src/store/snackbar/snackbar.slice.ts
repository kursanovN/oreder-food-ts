import { createSlice } from '@reduxjs/toolkit'

export type AlertColor = 'success' | 'info' | 'warning' | 'error'

interface initialType {
  open: boolean
  severity: AlertColor
  message: string
}

const initialState: initialType = {
  open: false,
  severity: 'success',
  message: '',
}

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    doSuccess(state, action) {
      state.severity = state.severity = 'success'
      state.message = state.message = action.payload
      // Successfully
      state.open = state.open = true
    },
    doError(state, action) {
      state.severity = state.severity = 'error'
      state.message = state.message = action.payload
      state.open = state.open = true
    },
    closeSnackbar(state) {
      state.open = false
    },
  },
})

export const ActionsTypeSnackbar = snackbarSlice.actions
