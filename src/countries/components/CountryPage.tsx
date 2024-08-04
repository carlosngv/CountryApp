import { useParams } from 'react-router-dom'
import { Country } from '../interfaces/countries.interface'
import { useFetch } from '../../shared/hooks/useFetch';

export const CountryPage = ( ) => {

  const { countryId } = useParams();
  console.log( countryId );

  const { isLoading, responseData, errors } = useFetch( `https://restcountries.com/v3.1/alpha/${ countryId }` );
  const country: Country = responseData[0];

  console.log(isLoading, responseData, errors);
  const alertComponent = (<div className="alert alert-primary mt-2 mb-2" role="alert">Loading...</div>)

  return (
    <>
      {
        isLoading
        ? alertComponent
        : (
          <div className="row">
            <div className='col-4'>
              <h1>{ country.name.common }</h1>

              <img src={ country.flags.png }></img>
            </div>

            <div className="col mt-5">
              <ul className="list-group">
                <li className="list-group-item list-group-item-dark"><strong>Region: </strong> { country.region }</li>
                <li className="list-group-item list-group-item-dark"><strong>Subregion: </strong> { country.subregion || 'No info' }</li>
                <li className="list-group-item list-group-item-dark"><strong>Capital: </strong> { country.capital[0] }</li>
                <li className="list-group-item list-group-item-dark"><strong>Population: </strong> { country.population }</li>
                <li className="list-group-item list-group-item-dark"><strong>Languages: </strong> { Object.values(country.languages).map( language => (<span className="badge text-bg-secondary m-1">{ language }</span>) ) }</li>

              </ul>
              <br/>

            </div>

          </div>
        )
      }


    </>
  )
}
