import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoutes'
import { UserLayout } from '../layout/user/UserLayout'
import { MealLayout } from '../layout/user/MealLayout'
import { AdminLayout } from '../layout/admin/AdminLayout'
import { ROLES } from '../common/types/types'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

export const MainRoutes = () => {
  const role = useSelector((state: RootState) => state.auth.user.role)

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute
              isAllowed={['GUEST', 'USER'].includes(role)}
              fallBacPath="/admin"
              component={UserLayout}
            />
          }
        >
          <Route
            index
            element={
              <ProtectedRoute
                isAllowed={['GUEST', 'USER'].includes(role)}
                fallBacPath="/admin"
                component={MealLayout}
              />
            }
          />
          <Route
            path="signIn"
            element={
              <ProtectedRoute
                isAllowed={['GUEST', 'USER'].includes(role)}
                fallBacPath={role === ROLES.ADMIN ? '/admin' : '/'}
                component={SignIn}
              />
            }
          />

          <Route
            path="signUp"
            element={
              <ProtectedRoute
                isAllowed={['GUEST', 'USER'].includes(role)}
                fallBacPath={role === ROLES.ADMIN ? '/admin' : '/'}
                component={SignUp}
              />
            }
          />
        </Route>

        <Route
          path="/admin"
          element={
            <ProtectedRoute
              isAllowed={[ROLES.ADMIN].includes(role)}
              fallBacPath="/"
              component={AdminLayout}
            />
          }
        />
      </Routes>
    </div>
  )
}
