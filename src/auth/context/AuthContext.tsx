import { createContext } from "react";

interface AuthContextInterface<T> {
    authState: boolean;
    login: ( email: string ) => void;
    logout: () => void;
}

export const AuthContext = createContext({
    authState: false,
    login: ( email: string ) => {},
    logout: () => {}
});
