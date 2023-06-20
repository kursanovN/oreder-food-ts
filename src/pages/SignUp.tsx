import { Button, TextField, Typography, styled } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import InputPassword from '../components/UI/InputPassword'
import { ISignUp, ROLES } from '../common/types/types'
import { ActionsTypeSnackbar } from '../store/snackbar/snackbar.slice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store'
import { signUp } from '../store/auth/auth.thunk'

const schema = z
  .object({
    name: z.string().min(3, 'The string must be at least 3 characters'),
    email: z.string().email('Incorrect E-Mail Address'),
    password: z.string().min(4, 'The string must be at least 4 characters'),
    confirm: z.string(),
    role: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: 'Invalid Input, Confirm Password',
    path: ['confirm'],
  })

export const SignUp = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const { handleSubmit, register, formState } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirm: '',
      role: ROLES.USER,
    },
    mode: 'onChange',
    resolver: zodResolver(schema),
  })

  const submitHandler = async (values: ISignUp) => {
    try {
      await dispatch(signUp(values)).unwrap()
      navigate('/signIn')

      dispatch(ActionsTypeSnackbar.doSuccess('Successfully'))
    } catch (error) {
      if (error instanceof Error && error.message) {
        dispatch(ActionsTypeSnackbar.doError(error.message))
      } else {
        dispatch(ActionsTypeSnackbar.doError('Something went wrong'))
      }
    }
  }

  return (
    <Container>
      <Box>
        <Form onSubmit={handleSubmit(submitHandler)}>
          <ContainerInput>
            <TextField
              label="Name"
              error={!!formState.errors.name}
              {...register('name')}
              type="text"
              sx={{ width: '100%' }}
            />

            {formState.errors.name && (
              <Typography sx={{ color: '#ff0000' }}>
                {formState.errors.name.message}
              </Typography>
            )}

            <TextField
              label="Email"
              error={!!formState.errors.email}
              {...register('email')}
              type="email"
              sx={{ width: '100%' }}
            />

            {formState.errors.email && (
              <Typography sx={{ color: '#ff0000' }}>
                {formState.errors.email.message}
              </Typography>
            )}

            <ContainerInputPassword>
              <InputPassword
                error={!!formState.errors.password}
                register={{ ...register('password') }}
                label="Password"
                width="100%"
                id="outlined-adornment-password"
              />

              {formState.errors.password && (
                <Typography sx={{ color: '#ff0000' }}>
                  {formState.errors.password.message}
                </Typography>
              )}

              <InputPassword
                error={!!formState.errors.confirm}
                register={{ ...register('confirm') }}
                label="Confirm Password"
                width="100%"
                id='outlined-adornment-confirm-password"'
              />

              {formState.errors.confirm && (
                <Typography sx={{ color: '#ff0000' }}>
                  {formState.errors.confirm.message}
                </Typography>
              )}
            </ContainerInputPassword>
          </ContainerInput>
          <Button
            type="submit"
            sx={{ padding: '10px 20px', fontSize: '1.2rem' }}
            variant="contained"
          >
            Sign Up
          </Button>
        </Form>
        <div>
          <p style={{ fontSize: '1.2rem' }}>
            <Link
              style={{ fontSize: '1.2rem', textDecoration: 'none' }}
              to="/signIn"
            >
              {'<-'} Sign In
            </Link>
            {'  '} SignIn with current account
          </p>
        </div>
      </Box>
    </Container>
  )
}

const Container = styled('div')`
  margin: 0 auto;
  width: 500px;
  padding: 60px;
`

const Box = styled('div')`
  width: 500px;
  background-color: #fff;
  padding: 20px;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Form = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const ContainerInput = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`

const ContainerInputPassword = styled('div')`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 0px 20px;
  align-items: center;
  gap: 10px;
  margin-top: -9px;
`
