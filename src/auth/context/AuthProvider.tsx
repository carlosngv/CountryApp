import React, { useState } from 'react';
import { AuthContext } from "./AuthContext";

export const AuthProvider = ( { children }: { children: React.ReactNode } ) => {

    const [authState, setAuthState] = useState(false);

    const login = ( email: string ) => {
        const user = { id: '123', email };
        localStorage.setItem( 'user', JSON.stringify(user) );
        setAuthState( true );
    }

    const logout = () => {
        localStorage.removeItem( 'user' );
        setAuthState( false );
    }

    return (
        <AuthContext.Provider value={ { login, logout, authState } }>
            { children }
        </AuthContext.Provider>
    )
}
