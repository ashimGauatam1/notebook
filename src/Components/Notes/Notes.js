import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Notes from '../Card/Card';
import Alert from '../alert/Alert';

const NotesList = ({ authToken,isAuthenticated }) => {

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/note/fetchuser', { 
          headers: { 'auth-token': authToken }
        });
        setNotes(response.data);
      } catch (error) {
        setDisplayAlert(true);
        setAlertType('danger');
      }
    };
    fetchNotes();
  }, [authToken]);

  return (
    <div>
      {!isAuthenticated && <Alert type="danger" message="Please Login First." onClose={() => setDisplayAlert(false)} />}
      
      {isAuthenticated && (
        <div>
          <h2 style={{textAlign:'center',marginTop:'10px'}}>Your Notes</h2>
          {notes && notes.map(note => (
            <Notes key={note._id} notes={note} />
          ))}
        </div>
      )}
    </div> 
  );
};

export default NotesList;


