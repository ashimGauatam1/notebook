import React from 'react'
import '../Components/Card/Card.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
        
        
               <div className='ssc' style={{display:'inline-block'}}>
                <div className='scard-body' >
                <div className="scard animate__animated animate__fadeIn" >
                  <h2 className="product-name">Log In</h2>
                   <b><p className="product-price">If you already have an account in our website then kindly Login with your email .</p></b>
                   <Link style={{"textDecoration":"none" }} className="see-more-button" to="/login" >Log In</Link>
                 </div>
               </div>
               </div>
               <div className='ssc' style={{display:'inline-block'}}>
                <div className='scard-body' >
                <div className="scard animate__animated animate__fadeIn" >
                  <h2 className="product-name">Add Notes</h2>
                   <b><p className="product-price">If your want to Add notes then login first with your correct credentials and add notes.</p></b>
                   <Link style={{"textDecoration":"none" }} className="see-more-button" to="/add_note" >Add Notes</Link>
                 </div>
               </div>
               </div>
               <div className='ssc' style={{display:'inline-block'}}>
                <div className='scard-body' >
                <div className="scard animate__animated animate__fadeIn" >
                  <h2 className="product-name">View Notes</h2>
                   <b><p className="product-price">If you want to see your notes then login first and see here .</p></b>
                   <Link style={{"textDecoration":"none" }} to="/notelist" className="see-more-button" >See Notes</Link>
                 </div>
               </div>
               </div>
</div>
)
}

export default Home
