import React, { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext';
import { Navigate } from 'react-router-dom';

export const PrivateRouter = ( { children }: { children: React.ReactNode } ) => {

    const { authState } = useContext( AuthContext );
    return (
        authState
        ? children
        : <Navigate to="/auth/login" />
    )
}
