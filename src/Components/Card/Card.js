import React, { useState } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Notes = ({ notes }) => {
  const [showMore, setShowMore] = useState(false);
  const maxLength = 15; 
  const cardHeight = showMore ? 'auto' : '300px'; 
  const cardWidth=showMore?'auto':'300px';
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div style={{ display: 'inline-block' }}>
      <div className='ssc'>
        <div className='scard-body'>
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
            <Link style={{ textDecoration: 'none', marginTop: '5px', backgroundColor: 'red' }} className="see-more-button">Delete</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
