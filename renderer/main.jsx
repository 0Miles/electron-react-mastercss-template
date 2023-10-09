import React from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import App from './app'
import '@master/css'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

const router = createHashRouter([
    {
        path: '/',
        element: <App />
    },
])

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
