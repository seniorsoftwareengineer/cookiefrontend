/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from "react-router-dom"
import Register from "./pages/Register.jsx"
import Login from "./pages/login.jsx"
import Header from "./components/header.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>

            <Route path="/" element={<Register/>} ></Route> 
            <Route path="/login" element={<Login/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
