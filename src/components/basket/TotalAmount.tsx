import { styled } from '@mui/material'
import { Button } from '../UI/Button'
// import { Button } from '../UI/button/Button'

interface PropsTotalAmount {
  totalPrice: number
  toggleHandler: () => void
}

export const TotalAmount = ({
  toggleHandler,
  totalPrice,
}: PropsTotalAmount) => {
  const isOrderButton =
    totalPrice > 0 ? <Button variants="contained">Order</Button> : null

  return (
    <div>
      <InfoContainer>
        <Label>Total Amount</Label>
        <Price>$ {totalPrice}</Price>
      </InfoContainer>
      <ActionButtonContainer>
        <Button variants="outlet" onClick={toggleHandler}>
          Close
        </Button>
        {isOrderButton}
      </ActionButtonContainer>
    </div>
  )
}

const Label = styled('p')(() => ({
  fontWeight: '600',
  fontSize: '20px',
  lineHeight: '30px',
  textAlign: 'center',
}))

const Price = styled('p')(() => ({
  fontWeight: '600',
  fontSize: '22px',
  lineHeight: '33px',
  color: '#8a2b06',
}))

const InfoContainer = styled('div')(() => ({
  paddingTop: '30px',
  display: 'flex',
  justifyContent: 'space-between',
}))

const ActionButtonContainer = styled('div')(() => ({
  marginTop: '24px',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '1rem',
}))
