import React, { useEffect, useState } from 'react';
import  './Signup.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate=useNavigate();
  const [User,Setuser]=useState({
    name:"",
    email:"",
    password:""
  })  
  const handlechange=(e)=>{
    const {name,value}=e.target;
    Setuser({
      ...User,
      [name]:value
    })
  }
  const handlesubmit=async(e)=>{
    e.preventDefault();
    const response=await axios.post("http://localhost:8080/api/auth/createuser",User);
    if(response.status==200){
      navigate("/login");
    }
    else{
      alert("Something went wrong");
    }      
  }
  return (
    <div>    
<div className="container">
        <div className="signup-form">
            <h2>Sign Up</h2>
            <form onSubmit={handlesubmit}>
                <input type="text"  id="name" name='name' placeholder="Username" onChange={handlechange}  required/>
                <input type="email" id="email"  name='email'  placeholder="Email" onChange={handlechange} required/>
                <input type="password" id="password" name='password' minLength={5}  placeholder="Password" onChange={handlechange} required/>
                <button to={"/login"} className="button" type="submit">Sign Up</button>
                <h4 className='or'> Or sign up with</h4>
                <div>
        </div>
              
            </form>
        </div>
    </div>
    </div>
  )
}

export default Signup
