import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { LoadingProvider } from './context/LoadingContext' // Add this import

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* Wrap App with LoadingProvider */}
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </BrowserRouter>
  </StrictMode>,
)