import React from 'react'
import { useForm } from '../hooks/useForm'

export const SearchInput = ( { onInputValue = ( newValue: string ) => {} } ) => {

    const { formState, onInputChange, onReset } = useForm({
        formValue: '',
    });

    const { formValue } = formState;



    const onSubmit = ( e: React.FormEvent ) => {
        e.preventDefault();
        if( formValue.length < 3 ) return;
        onInputValue( formValue );
        onReset();
    }


    return (
        <>
            <form className="row g-2 mb-4 mt-4">
                <div className="d-grid gap-3">
                    <input onChange={ onInputChange } value={ formValue } className="form-control" name="formValue" type="text" placeholder="What are you looking for?"/>
                    <button id="submit-btn" onClick={ onSubmit } className="btn btn-lg btn-dark col-auto">Search</button>
                </div>

            </form>
        </>



    )
}
