import { useEffect, useState } from "react"
import { Country } from "../../countries/interfaces/countries.interface";

export const useFetch = ( url: string ) => {

    const countryArr: Country[] = [];

    const [fetchResponse, setFetchResponse] = useState({
        isLoading: true,
        responseData: countryArr,
        errors: {} || null
    });

    useEffect(() => {
        // TODO: getFetch();
        getFetch();
    }, [ url ]);

    const getFetch = async () => {

        // TODO: Cache with local storage

        const response = await fetch( url );

        // ? Para simular un retraso
        await new Promise( resolve => setTimeout(resolve, 1500));

        const data = await response.json();

        setFetchResponse({
            isLoading: false,
            responseData: data,
            errors: null,
        })
    }

    return {
        isLoading: fetchResponse.isLoading,
        responseData: fetchResponse.responseData,
        errors: fetchResponse.errors,
    }

}
