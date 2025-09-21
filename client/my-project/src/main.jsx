import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Pages/Login/Login.jsx'
import User from './Pages/User/User.jsx'
import SignUp from './Pages/SignUp/SignUp.jsx'
import RootLayout from './RootLayout/RootLayout.jsx'



import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path="/"  element={<RootLayout />}>
      <Route path="/" index element={<Login />} />
      <Route path="/user" element={<User />} />
      <Route path="/inbox" element={<SignUp />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </StrictMode>,
)
