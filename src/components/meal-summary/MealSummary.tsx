import { styled } from '@mui/material'
import foodPhoto from '../../assets/images/summary-background.jpg'
import { MealSummaryCard } from './MealSummaryCard'

export const MealSummary = () => {
  return (
    <Container>
      <Img src={foodPhoto} alt="Food Photos" />
      <MealSummaryCard />
    </Container>
  )
}

const Container = styled('div')`
  width: 100%;
  height: 432px;
  margin-top: 101px;
`

const Img = styled('img')`
  width: 100%;
  height: 100%;
`
