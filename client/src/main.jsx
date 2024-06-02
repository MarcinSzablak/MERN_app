import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import ErrorPage from './routes/error-page.jsx';
import Admin from './routes/Admin.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path:"/Admin",
    element: <Admin/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
