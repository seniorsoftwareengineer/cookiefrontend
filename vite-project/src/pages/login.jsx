import React from 'react'
import "../css/login.css"
import Header from "../components/header.jsx"
import axios from "axios"
import {useState} from "react"
function Login() {

  const [username,setusername] =useState();

  const[password,setpassword]=useState();

  const login=async function(){




    const response= await axios.post("https://ikracoskun.xyz/api/auth/login",{username:username,password:password})

    console.log(response.data);
    
    }
  


  return (
<div>
<Header/>

<div className="outer-box">
    <div className="login-box">
      <h4 className="login-text">Giriş</h4>
      <center>
      <input onChange={function(e){setusername(e.target.value)}} value = {username} placeholder="Kullanıcı Adı"/>
      <input onChange={function(e){setpassword(e.target.value)}} value ={password}placeholder="Şifre"/>

      <button onClick={()=>{login()}} id="btn-login">Giriş Yap</button>
      <button id="btn-forgot">Şifremi unuttum!</button>
      </center>
    </div>
  </div>
</div>
    )
}

export default Login