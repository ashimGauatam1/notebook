import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Alert from '../../alert/Alert'
const Login = ({onLogin}) => {
    let navigate=useNavigate();
  const [alertType, setAlertType] = useState('danger');
  const [showAlert, setShowAlert] = useState(false);
    const [data,Setdata]=useState({
        email:"",
        password:""
    })
    const handlesubmit=async(e)=>{
        e.preventDefault();
        try {
        const response = await axios.post("http://localhost:8080/api/auth/login", data);
        if (response.status === 200) {
            Setdata(response.data);
            const authToken = response.data.token;
            onLogin(authToken);
            navigate("/notelist");
        }
    } catch (error) {
        if (error.response && error.response.status === 400) {
        setAlertType('danger');
        setShowAlert(true);
        } else {
            alert("An error occurred. Please try again later.");
        }
    }
    }
    const handlechange=(e)=>{
        const {name,value}=e.target;
        Setdata({
            ...data,
            [name]:value
        })
    }
  return (
      <div>
         {showAlert && <Alert type={alertType} message="Invalid Credentials. Please check your email and password .If you are new kindly register" onClose={() => setShowAlert(false)} />}
        <div className='login-body'>
       <div className="login-container">
        <div className="login-box">
            <h2>Login</h2>
            <form onSubmit={handlesubmit}>
                <input type="email" placeholder="Email"  name="email"onChange={handlechange} required/>
                <input type="password" placeholder="Password" name="password" onChange={handlechange}  required/>
                <button type="submit">Login</button>
            </form>
            <div className="login-links">
                <Link to={"/forgot"}>Forgot Password?</Link>
                <span> | </span>
                <a href="/signup">Register</a>
            </div>
        </div>
    </div>
    </div>
 </div>
  )
}

export default Login
