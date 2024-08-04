import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CountryApp } from './CountryApp';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <CountryApp  />
  </BrowserRouter>

)
