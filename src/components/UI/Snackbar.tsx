import { Alert, Snackbar } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

interface IProps {
  onClose: () => void
}

export const SnackbarMui = ({ onClose }: IProps) => {
  const { open, severity, message } = useSelector(
    (state: RootState) => state.snackbar
  )

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={onClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={onClose} severity={severity} sx={{ width: '100% ' }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  )
}
