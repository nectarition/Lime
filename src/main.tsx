import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, ScrollRestoration, Outlet } from 'react-router-dom'

import GlobalStyle from './styles/GlobalStyle'

import { getFirebaseApp, initializeAppCheck } from './libs/FirebaseApp'

import App from './pages/App'

const Root: React.FC = () => (
  <>
    <Outlet />
    <ScrollRestoration />
  </>
)

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        index: true,
        element: <App />
      }
    ]
  }
])

getFirebaseApp()
initializeAppCheck()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
