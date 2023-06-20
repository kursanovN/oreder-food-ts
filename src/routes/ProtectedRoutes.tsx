import { FC } from 'react'
import { Navigate } from 'react-router-dom'

type Props = {
  component: FC
  fallBacPath: string
  isAllowed: boolean
}

export const ProtectedRoute = ({
  component: Comment,
  fallBacPath,
  isAllowed,
}: Props) => {
  if (!isAllowed) {
    return <Navigate to={fallBacPath} />
  }
  return <Comment />
}
