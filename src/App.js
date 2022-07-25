import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Login from './Components/Login'
import SignIn from './Components/SignIn';
import Main from './Components/Main';
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/main' element={<Main />} />
      </Routes>

    </div>
  )
}

export default App