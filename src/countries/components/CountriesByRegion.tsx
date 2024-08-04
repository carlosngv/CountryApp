import { useState } from "react";
import { CountriesTable } from "../../shared/components/CountriesTable"
import { SearchInput } from "../../shared/components/SearchInput"

export const CountriesByRegion = () => {

    const [inputValue, setInputValue] = useState('');

    const onInputValue = ( newValue: string ) => {
        setInputValue( newValue );
    }

    return (
        <>
            <h1>Countries by Region</h1>
            <hr />
            <SearchInput onInputValue={ onInputValue } />
            { inputValue.length > 0 && (
                    <>
                        <code>Results for: { inputValue }</code>
                        <CountriesTable url={ `https://restcountries.com/v3.1/region/${ inputValue }` } />
                    </>
                )
            }

        </>
    )
}
