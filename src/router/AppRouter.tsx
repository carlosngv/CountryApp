import { Route, Routes, Navigate } from 'react-router-dom'
import { CountryRoutes } from '../countries/router/CountryRoutes'
import { PublicRouter } from './PublicRouter'
import { LoginPage } from '../auth/pages/LoginPage'
import { PrivateRouter } from './PrivateRouter'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/auth/login'  element={ <PublicRouter> <LoginPage /> </PublicRouter> } />
        <Route path="*" element={
            <PrivateRouter>
              <CountryRoutes />
            </PrivateRouter>
          }
        />
    </Routes>
  )
}
