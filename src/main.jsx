import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routers/Router/Router.jsx'
import AuthProviders from './Providers/AuthProviders/AuthProviders.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>,
)
