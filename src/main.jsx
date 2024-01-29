import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Primer paso, englobamos App con el componente BrowserRouter para que nuestra aplicación tenga acceso a sus capacidades de routing */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
