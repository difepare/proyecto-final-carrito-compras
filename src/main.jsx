import React from 'react'
import ReactDom from 'react-dom/client'

import './index.css'
import { CarritoApp } from './CarritoApp'
import { BrowserRouter } from 'react-router-dom'

ReactDom.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <CarritoApp/>
  </React.StrictMode>,
  </BrowserRouter>
)
