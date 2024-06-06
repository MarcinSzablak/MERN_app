import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import ErrorPage from './routes/error-page.jsx';
import Admin from './routes/Admin.jsx'
import AdminPanel from './routes/AdminPanel.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import { CookiesProvider } from "react-cookie";

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path:"/Admin",
    element: <Admin/>,
  },
  {
    path:"/AdminPanel",
    element: <AdminPanel/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  </React.StrictMode>,
)
