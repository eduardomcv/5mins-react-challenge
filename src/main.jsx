import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Root } from './routes/root'
import { Movie } from './routes/movie'
import { ErrorElement } from './components/ErrorElement'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorElement />
  },
  {
    path: '/movie/:id',
    element: <Movie />,
    errorElement: <ErrorElement />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
