import { RootState, store } from './store'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { MainRoutes } from './routes/routes'
import { SnackbarMui } from './components/UI/Snackbar'
import { ActionsTypeSnackbar } from './store/snackbar/snackbar.slice'

export const AppContent = () => {
  const { open } = useSelector((state: RootState) => state.snackbar)
  const dispatch = useDispatch()

  const onCloseHandler = () => {
    dispatch(ActionsTypeSnackbar.closeSnackbar())
  }

  return (
    <div>
      {open && <SnackbarMui onClose={onCloseHandler} />}

      <MainRoutes />
    </div>
  )
}

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Provider>
  )
}
