import React from 'react'
import Navbar from './Navbar'
import '../Components/Card/Card.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className='ssc' >
                <div className='scard-body' >
                <div className="scard animate__animated animate__fadeIn" >
                  <h2 className="product-name">Sign Up</h2>
                   <b><p className="product-price">If you are visiting for first time in our website then kindly sign up with your email .</p></b>
                   <Link style={{"textDecoration":"none" }} className="see-more-button" >Sign Up</Link>
                 </div>
               </div>
               </div>
               <div className='ssc' >
                <div className='scard-body' >
                <div className="scard animate__animated animate__fadeIn" >
                  <h2 className="product-name">Log In</h2>
                   <b><p className="product-price">If you already have an account in our website then kindly Login with your email .</p></b>
                   <Link style={{"textDecoration":"none" }} className="see-more-button" >Log In</Link>
                 </div>
               </div>
               </div>
               <div className='ssc' >
                <div className='scard-body' >
                <div className="scard animate__animated animate__fadeIn" >
                  <h2 className="product-name">Add Notes</h2>
                   <b><p className="product-price">If your want to Add notes then login first with your correct credentials and add notes.</p></b>
                   <Link style={{"textDecoration":"none" }} className="see-more-button" >Add Notes</Link>
                 </div>
               </div>
               </div>
               <div className='ssc' >
                <div className='scard-body' >
                <div className="scard animate__animated animate__fadeIn" >
                  <h2 className="product-name">View Notes</h2>
                   <b><p className="product-price">If you want to see your notes then login first and see here .</p></b>
                   <Link style={{"textDecoration":"none" }} className="see-more-button" >See Notes</Link>
                 </div>
               </div>
               </div>
</div>
)
}

export default Home
