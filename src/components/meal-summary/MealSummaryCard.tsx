import { styled } from '@mui/material'

export const MealSummaryCard = () => {
  return (
    <Container>
      <Box>
        <Title>Delicious Food, Delivered To You</Title>
        <Text>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </Text>
        <Text>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </Text>
      </Box>
    </Container>
  )
}

const Container = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '-175px',
}))

const Box = styled('div')(() => ({
  backgroundColor: '#383838',
  boxShadow: '0px 6px 16px #0000004c',
  borderRadius: '16px',
  textAlign: 'center',
  color: '#fff',
  padding: '36px 54px',
}))

const Title = styled('h3')(() => ({
  fontFamily: 'Poppins',
  fontWeight: 600,
  fontSize: '36px',
  lineHeight: '54px',
  marginBottom: '26px',
}))

const Text = styled('p')(() => ({
  fontFamily: 'Poppins',
  fontWeight: 500,
  fontSize: '16px',
  width: '746px',
  lineHeight: '24px',
  textAlign: 'center',
  marginTop: '20px',
}))
