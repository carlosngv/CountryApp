import { NavLink } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export const CountriesTable = ( { url = '' } ) => {

    const { isLoading, responseData, errors  } = useFetch( url );


    const alertComponent = (<div className="alert alert-primary mt-2 mb-2" role="alert">Loading...</div>)
    const noResultsComponent = (<div className="alert alert-danger mt-2 mb-2" role="alert">No results...</div>)

    return (
        <>
            {
                ( isLoading )
                ? alertComponent
                :  (responseData && responseData.length > 0) ?
                    (<table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Flag</th>
                                <th scope="col">Name</th>
                                <th scope="col">Capital</th>
                                <th scope="col">Population</th>
                                <th scope="col">Country info</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                responseData.map( ( item, idx ) => (
                                    <tr key={ idx }>
                                        <th scope="row">{ idx + 1 }</th>
                                        <td>{ item.flag }</td>
                                        <td>{ item.name.common }</td>
                                        <td>{ item.capital[0] || 'No info' }</td>
                                        <td>{ item.population }</td>
                                        <td>
                                            <NavLink to={`/countries/${ item.cca3 }`}>See more...</NavLink>
                                        </td>

                                    </tr>
                                ) )
                            }

                        </tbody>
                    </table>)
                    : noResultsComponent
            }
        </>

    )
}
