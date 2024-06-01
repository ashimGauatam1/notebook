import React, { useState } from 'react';
import './Card.css';
import { Link, redirect } from 'react-router-dom';
import axios from 'axios';

const Notes = ({ notes }) => {
  const [showMore, setShowMore] = useState(false);
  const maxLength = 15; 
  const cardHeight = showMore ? 'auto' : '300px'; 
  const cardWidth=showMore?'auto':'300px';
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleDeleteNote=async(id)=>{
    console.log(id);
    const response=await axios.delete(`http://localhost:8080/api/note/deletenote/${id}`);
    if(response.status==200){
      console.log("note deleted");
      window.location.reload();
    }
    else{
      alert("Error while deleting note");
    }
  }
  // console.log(notes._id);
  return (
    <div style={{ display: 'inline-block' }}>
      <div className='ssc'>
        <div className='scard-body' key={notes._id}>
          <div className='scard animate__animated animate__fadeIn'style={{ height: cardHeight,width:cardWidth }}>
            <h2 className='product-name'>{notes.title}</h2>
            {notes.description.length > maxLength ? (
              <>
                {showMore ? (
                  <b><p className='product-price'>{notes.description}</p></b>
                ) : (
                  <b><p className='product-price'>{`${notes.description.slice(0, maxLength)}...`}</p></b>
                )}
                <button onClick={toggleShowMore}  className="see-more1-button">
                  {showMore ? 'Show Less' : 'Show More'}
                </button>
              </>
            ) : (
              <b><p className='product-price'>{notes.description}</p></b>
            )}
            <p className='product-name' style={{ color: 'blueviolet' }}>Date: {new Date(notes.date).toLocaleString()}</p>
            <Link onClick={() => handleDeleteNote(notes._id)}  style={{ textDecoration: 'none', marginTop: '5px', backgroundColor: 'red' }} className="see-more-button">Delete</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
