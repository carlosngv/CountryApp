import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useForm } from '../../shared/hooks/useForm';

export const LoginPage = () => {

    const { formState, onInputChange, onReset } = useForm({
        email: '',
        password: '',
    });

    const { email, password } = formState;

    const { login } = useContext( AuthContext );

    const onLogin = ( e: React.FormEvent ) => {
        e.preventDefault();
        login( email );
        onReset();
    }

    return (
        <div className="container mt-5">
            <h1>Welcome to the CountryApp</h1>
            <form>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input onChange={ onInputChange } value={ email } name="email" type="email" className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input onChange={ onInputChange } value={ password } name="password" type="password" className="form-control"  />
                </div>
                <button type="submit" onClick={ onLogin } className="btn btn-primary">Sign in</button>
            </form>
        </div>
    )
}
