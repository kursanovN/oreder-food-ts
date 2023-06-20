import { ChangeEvent, useState } from 'react'
import { styled } from '@mui/material'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import { MouseEvent } from 'react'
import { Button } from '../UI/Button'

interface PropsMealsItemForm {
  addItemHandler: (amount: number) => void
}

export const MealsItemForm = ({ addItemHandler }: PropsMealsItemForm) => {
  const [amount, setAmount] = useState(1)

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(+e.target.value)
  }

  const addBasketHandler = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault()

    addItemHandler(+amount)
  }

  return (
    <StyledForm>
      <InputContainer>
        <LabelStyles>
          Amount
          <Input
            type="number"
            value={amount}
            onChange={changeHandler}
            min={1}
          />
        </LabelStyles>
      </InputContainer>
      <Button variants="contained" onClick={addBasketHandler}>
        <StyledIcon /> Add
      </Button>
    </StyledForm>
  )
}

const Input = styled('input')(() => ({
  boxSizing: 'border-box',
  width: '60px',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '24px',
  padding: '4px 11px 4px 12px',

  border: '1px solid #d6d6d6',
  outline: 'none',
  borderRadius: '6px',

  marginLeft: '20px',
}))

const StyledIcon = styled(AddOutlinedIcon)(() => ({
  marginRight: '10px',
}))

const InputContainer = styled('div')(() => ({
  display: 'flex',
  gap: '20px',
}))

const LabelStyles = styled('div')(() => ({
  fontWeight: '600',
  fontSize: '18px',
  lineHeight: '27px',
  marginRight: '20px',

  display: 'flex',
  alignItems: 'center',
  marginBottom: '12px',
}))

const StyledForm = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
}))
