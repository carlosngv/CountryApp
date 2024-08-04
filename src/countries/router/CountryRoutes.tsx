import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../shared/components/Navbar'
import { CountriesByCapital } from '../components/CountriesByCapital'
import { CountriesByName } from '../components/CountriesByName'
import { CountriesByRegion } from '../components/CountriesByRegion'
import { CountryPage } from '../components/CountryPage'

export const CountryRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <Routes >

                    <Route path='by-region' element={ <CountriesByRegion /> } />
                    <Route path='by-capital' element={ <CountriesByCapital /> } />
                    <Route path='by-name' element={ <CountriesByName /> } />
                    <Route path='countries/:countryId' element={ <CountryPage /> } />
                    <Route path='*' element={ <Navigate to='by-region' /> } />
                </Routes>
            </div>
        </>
    )
}
