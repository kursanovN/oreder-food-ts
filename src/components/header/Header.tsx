import { styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { OrderBasket } from './OrderBasket'
import { Button } from '../UI/Button'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../../store/auth/auth.thunk'

interface PropsHeader {
  toggleHandler: () => void
}

export const Header = ({ toggleHandler }: PropsHeader) => {
  const { isAuthorization } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const [animationClass, setAnimationClass] = useState('')

  const plusAnimation = () => {
    setAnimationClass('bump')

    const animationTimePlus = setTimeout(() => {
      setAnimationClass('')
    }, 300)

    return () => {
      clearTimeout(animationTimePlus)
    }
  }

  const navigateToSignIn = () => {
    navigate('signIn')
  }

  const logOutHandler = () => {
    dispatch(logOut())
  }

  useEffect(() => {
    plusAnimation()
  }, [])

  return (
    <HeaderStyle>
      <Container>
        <Logo style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
          React Meals
        </Logo>
        <OrderBasket className={animationClass} toggleHandler={toggleHandler}>
          Your Cart
        </OrderBasket>
        {!isAuthorization ? (
          <MuiButton variants="contained" onClick={navigateToSignIn}>
            Sign In
          </MuiButton>
        ) : (
          <MuiButton variants="contained" onClick={logOutHandler}>
            Log Out
          </MuiButton>
        )}
      </Container>
    </HeaderStyle>
  )
}

const HeaderStyle = styled('header')(() => ({
  '& ': {
    position: 'fixed',
    top: '0',
    width: '100%',
    height: '101px',
    margin: '0',
    zIndex: '100',
    backgroundColor: '#8a2b06',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '120px',
    paddingRight: '120px',

    '& .bump': {
      animation: 'bump 300ms ease-out',
    },

    '@keyframes bump': {
      '0%': {
        transform: 'scale(1)',
      },
      '10%': {
        transform: 'scale(0.9)',
      },
      '30%': {
        transform: 'scale(1.1)',
      },
      '50%': {
        transform: 'scale(1.15)',
      },
      '100%': {
        transform: 'scale(1)',
      },
    },
  },
}))

const Container = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

const Logo = styled('p')(() => ({
  fontFamily: 'Poppins',
  fontWeight: 600,
  fontSize: '38px',
  lineHeight: '57px',
  color: '#fff',
  margin: 0,
}))

const MuiButton = styled(Button)(() => ({
  backgroundColor: '#602108',
}))
