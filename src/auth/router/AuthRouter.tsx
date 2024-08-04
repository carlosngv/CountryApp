import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"

export const AuthRouter = () => {
    <Routes>
        <Route path="/" element={ <LoginPage /> } />
        <Route path="*" element={ <Navigate to='/' /> } />
    </Routes>
}
