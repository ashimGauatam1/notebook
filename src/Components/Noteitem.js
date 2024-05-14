import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Card/Card.css';
const Noteitem = ({note}) => {
    return (
    <div>
        <div className='ssc' >
                <div className='scard-body' >
                <div className="scard animate__animated animate__fadeIn" key={note.id}>
                  <h2 className="product-name">{note.title}</h2>
                   <b><p className="product-price">{note.description}</p></b>
                   <Link style={{"textDecoration":"none" }} className="see-more-button" >See More</Link>
                 </div>
               </div>
               </div>
    </div>
  )
}

export default Noteitem
