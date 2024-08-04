import { useState } from "react";
import { SearchInput } from "../../shared/components/SearchInput";
import { CountriesTable } from "../../shared/components/CountriesTable";

export const CountriesByCapital = () => {
    const [inputValue, setInputValue] = useState('');

    const onInputValue = ( newValue: string ) => {
        setInputValue( newValue );
    }

    return (
        <>
            <h1>Countries by Capital</h1>
            <hr />
            <SearchInput onInputValue={ onInputValue } />
            { inputValue.length > 0 && (
                    <>
                        <code>Results for: { inputValue }</code>
                        <CountriesTable url={ `https://restcountries.com/v3.1/capital/${ inputValue }` } />
                    </>
                )
            }

        </>
    )
}
