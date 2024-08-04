import { AuthProvider } from "./auth/context/AuthProvider"
import { AppRouter } from "./router/AppRouter"

export const CountryApp = () => {
  return (
    <AuthProvider>
        <AppRouter />
    </AuthProvider>
  )
}
