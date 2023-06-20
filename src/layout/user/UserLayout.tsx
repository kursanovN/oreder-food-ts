import { useCallback, useEffect, useState } from 'react'
import { styled } from '@mui/material'
import { Header } from '../../components/header/Header'
import { Basket } from '../../components/basket/Basket'
import { Outlet } from 'react-router-dom'
import { getBasket } from '../../store/basket/basket.thunk'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store'

export const UserLayout = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [toggle, setToggle] = useState(false)

  const toggleHandler = useCallback(() => {
    setToggle((prev) => !prev)
  }, [])

  useEffect(() => {
    dispatch(getBasket())
  }, [dispatch])

  return (
    <div>
      <Header toggleHandler={toggleHandler} />
      {toggle && <Basket onClose={toggleHandler} open={toggle} />}

      <Container>
        <Outlet />
      </Container>
    </div>
  )
}

const Container = styled('div')`
  margin-top: 101px;
`
