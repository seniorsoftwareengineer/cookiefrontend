import {Outlet,Navigate} from "react-router-dom"
import React from 'react'
import Cookies from "universal-cookie"

function PrivateRoutes() {

    const cookies = new Cookies();

    const token = cookies.get("connect.sid");

    
  return (
    token ? <Outlet />  :<Navigate to="/login"/>
 )
}

export default PrivateRoutes