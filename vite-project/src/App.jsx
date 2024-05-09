/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/login.jsx";
import Headerloaded from "./components/headerloaded.jsx";
import PrivateRoutes from "./utils/PrivateRoutes.jsx";
import Home from "./pages/Home.jsx"

function App() {
  const [count, setCount] = useState(0);

  const [user,setuser] = useState();
  
  return (
    <div>
        <Routes>
          <Route element={<PrivateRoutes />}>
            
            <Route element={<Home />} path="/"></Route>
            
          </Route>
          <Route path="/login" element={<Login setuser={setuser} user={user}/>}></Route>
        </Routes>
    
    </div>
  );
}

export default App;
