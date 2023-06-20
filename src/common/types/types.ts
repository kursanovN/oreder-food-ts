/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

export interface IFormValues {
  title: string
  description: string
  price: number
}

export interface IEditFormValues extends IFormValues {
  _id: string | null
}

export interface IMeals {
  amount: number
  _id: string
  description: string
  price: number
  title: string
  [key: string]: number | string
}

export interface IColumnTable {
  header: string
  key: string
  index?: boolean
  fontStyle?: string
  fontWeight?: number
  color?: string
  number?: boolean
  render?: (meal: IMeals) => JSX.Element
}

export enum ROLES {
  ADMIN = 'ADMIN',
  USER = 'USER',
  GUEST = 'GUEST',
}

export interface ISignInResponse {
  data: {
    token: string

    user: {
      email: string
      name: string
      role: string
    }
  }
}

export interface ISignUp {
  name: string
  email: string
  role: ROLES
  password: string
  confirm?: string
}

export type ISignIn = Omit<ISignUp, 'name' | 'role'>

export interface IAddItemRequest {
  amount: number
  id: string
}
