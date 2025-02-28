import React, { useState } from "react"

interface FormStateReturn<T> {
    formState: T;
    onInputChange: ( e: React.ChangeEvent<HTMLInputElement> ) => void;
    onReset: () => void;
}

export const useForm = <T extends Record <string, any>>( initialState: T ):  FormStateReturn<T> => {

    const [formState, setFormState] = useState( initialState )

    const onInputChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [ name ]: value,
        })
    }

    const onReset = () => {
        setFormState( initialState );
    }

    return {
        formState,
        onInputChange,
        onReset
    }
}
