/* eslint-disable no-unused-vars */
import React from 'react'
import "../css/register.css"
import {useState,useEffect} from "react"
import axios from "axios"
function register() {

    const [username,setusername] = useState();

    const [email,setemail] = useState();

    const [password,setpassword] = useState();

    const Register=function(){

       const response= axios.post("https://ikracoskun.xyz/api/auth/register",{username:username,email:email,password:password})

        

    }

  return (
    <div>
    <div className="wrapper">
    <div className="title">Kayıt Ol
    </div>
    <div className="social_media">
        <div className="item">
            <i className="fab fa-facebook-f"></i>
        </div>
        <div className="item">
            <i className="fab fa-instagram"></i>
        </div>
        <div className="item">
            <i className="fab fa-twitter"></i>
        </div>
        
    </div>

    <div className="form">
        <div className="input_field">
            <input type="text" placeholder="Username"value={username} onChange={function(e){setusername(e.target.value)}} className="input"/>
            <i className="fas fa-user"></i>
        </div>
        <div className="input_field">
            <input type="text" placeholder="Email"value={email} onChange={function(e){setemail(e.target.value)}} className="input"/>
            <i className="far fa-envelope"></i>
        </div>
        <div className="input_field">
            <input type="Password" placeholder="Password" value={password} onChange={function(e){setpassword(e.target.value)}} className="input"/>
            <i className="fas fa-lock"></i>
            </div>
            <div className="btn">
                <a onClick={Register} href="#">Kayıt Ol</a>
            </div>
        </div>
    </div>
    </div>

  )
}

export default register