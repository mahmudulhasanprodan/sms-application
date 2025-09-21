import React from 'react'
import SignUp from './Pages/SignUp/SignUp'
import Login from './Pages/Login/Login'
import User from './Pages/User/User'
import { ToastContainer } from 'react-toastify';


const App = () => {
  return (
    <>
    <Login />
    <User />
    <SignUp />
    </>
  )
}

export default App