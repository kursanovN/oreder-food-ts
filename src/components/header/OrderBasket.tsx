import { styled } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { ReactNode } from 'react'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'

interface PropsOrderBasket {
  toggleHandler: () => void
  className: string
  children: ReactNode
}

export const OrderBasket = ({
  children,
  toggleHandler,
  className,
}: PropsOrderBasket) => {
  const { basket } = useSelector((state: RootState) => state.basket)

  const totalAmount = basket?.reduce(
    (prev, current) => prev + current.amount,
    0
  )

  return (
    <Button className={className} onClick={toggleHandler}>
      <BasketIcon />
      <OrderBasketTitle>{children}</OrderBasketTitle>
      <OrderBasketCount>{totalAmount}</OrderBasketCount>
    </Button>
  )
}

const Button = styled('button')(() => ({
  padding: '16px 38px',
  backgroundColor: '#5a1f08',
  borderRadius: '30px',
  border: 'none',

  display: 'flex',
  alignItems: 'center',

  ':hover': {
    backgroundColor: '#4d1601',
  },

  ':active': {
    backgroundColor: '#993108',
  },

  cursor: 'pointer',
}))

const OrderBasketTitle = styled('span')(() => ({
  fontFamily: 'Poppins',
  fontWeight: 600,
  lineHeight: '24px',
  fontSize: '16px',
  color: '#fff',
  marginLeft: '13px',
}))

const OrderBasketCount = styled('span')(() => ({
  backgroundColor: '#8a2b06',
  borderRadius: '30px',
  padding: '4px 20px',
  marginLeft: '24px',

  fontFamily: 'Manrope',
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '27px',
  color: '#fff',
}))

const BasketIcon = styled(ShoppingCartOutlinedIcon)(() => ({
  color: '#fff',
}))
