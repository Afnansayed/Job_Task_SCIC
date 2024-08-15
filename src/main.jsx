import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routers/Router/Router.jsx'
import AuthProviders from './Providers/AuthProviders/AuthProviders.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
    <QueryClientProvider client={queryClient}>
              <RouterProvider router={router} />
    </QueryClientProvider>
    </AuthProviders>
  </StrictMode>,
)
