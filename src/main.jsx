import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router  from './App.jsx'
import {
  RouterProvider,
} from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
