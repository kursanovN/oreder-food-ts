import { createSlice } from '@reduxjs/toolkit'
import { ROLES } from '../../common/types/types'
import { logOut, signIn, signUp } from './auth.thunk'
import { STORAGE_KEY } from '../../common/utils/constants'

interface AuthState {
  isAuthorization: boolean
  token: string

  user: {
    name: string
    email: string
    role: ROLES
    id?: string
  }
}

const getInitialState = () => {
  const json = localStorage.getItem(STORAGE_KEY.AUTH)

  if (json) {
    const userData = JSON.parse(json) as Omit<AuthState, 'isAuthorization'>

    return {
      isAuthorization: true,
      token: userData.token,

      user: {
        name: userData.user.name,
        email: userData.user.email,
        role: userData.user.role,
      },
    }
  }

  return {
    isAuthorization: false,
    token: '',

    user: {
      name: '',
      email: '',
      role: ROLES.GUEST,
    },
  }
}

const initialState: AuthState = getInitialState()

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.isAuthorization = true
      state.token = action.payload.token

      state.user = {
        name: action.payload.user.name,
        email: action.payload.user.email,
        role: ROLES[action.payload.user.role as keyof typeof ROLES],
      }
    })

    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isAuthorization = true
      state.token = action.payload.token

      state.user = {
        name: action.payload.user.name,
        email: action.payload.user.email,
        role: ROLES[action.payload.user.role as keyof typeof ROLES],
      }
    })

    builder.addCase(logOut.fulfilled, (state) => {
      state.isAuthorization = false
      state.token = ''

      state.user = {
        name: '',
        email: '',
        role: ROLES.GUEST,
        id: '',
      }
    })
  },
})

export const authActions = authSlice.actions
