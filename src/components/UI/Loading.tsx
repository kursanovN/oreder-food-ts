import { CircularProgress, styled } from '@mui/material'

export const Loading = () => {
  return (
    <Container>
      <CircularProgress />
    </Container>
  )
}

const Container = styled('div')`
  position: fixed;
  top: 0%;
  padding: 40%;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 99009;
  background-color: rgba(0, 0, 0, 0.75);
`
