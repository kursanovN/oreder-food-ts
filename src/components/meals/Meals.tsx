import { styled } from '@mui/material'
import { MealItem } from './MealItem'
import { Card } from '../UI/Card'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { useEffect } from 'react'
import { getFoods } from '../../store/meals/meals.thunk'

export const Meals = () => {
  const { meals } = useSelector((state: RootState) => state.meals)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getFoods())
  }, [dispatch])

  return (
    <>
      {/* {isLoading && <Loading />} */}
      <Container>
        <Card>
          {meals?.map((item) => (
            <MealItem key={item._id} item={item} />
          ))}
        </Card>
      </Container>
    </>
  )
}

const Container = styled('div')(() => ({
  marginTop: '135px',
  marginBottom: '100px',
}))

// const { items, isLoading } = useSelector((state: RootState) => state.meals)

// const dispatch = useDispatch<AppDispatch>()

// useEffect(() => {
//   dispatch(getFoods())
// }, [dispatch])
