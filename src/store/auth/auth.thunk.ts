import { createAsyncThunk } from '@reduxjs/toolkit'
import { postSignInRequest, postSignUpRequest } from '../../api/auth.service'
import { STORAGE_KEY } from '../../common/utils/constants'
import { ISignIn, ISignUp } from '../../common/types/types'

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (payload: ISignIn, { rejectWithValue }) => {
    try {
      const { data } = await postSignInRequest(payload)

      localStorage.setItem(STORAGE_KEY.AUTH, JSON.stringify(data.data))

      return data.data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (payload: ISignUp, { rejectWithValue }) => {
    try {
      const { data } = await postSignUpRequest(payload)

      localStorage.setItem(STORAGE_KEY.AUTH, JSON.stringify(data.data))

      return data.data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const logOut = createAsyncThunk(
  'admin/logOut',
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem(STORAGE_KEY.AUTH)
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
