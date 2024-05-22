import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import Notes from '../Card/Card';

const NotesList = ({ authToken }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/note/fetchuser', { 
          headers: { 'auth-token': authToken }
        });
        setNotes(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNotes();
  }, [authToken]);

  return (
    <div>
      <h2 style={{textAlign:'center',marginTop:'10px'}}>Your Notes</h2>
      
        {notes.map(note => (
          <Notes notes={note}/>
        ))}
      
    </div>
  );
};

export default NotesList;


//   <h1 style={{position:'relative',top:'320px',left:'490px'}}>Your Notes</h1>
//   {
//        <Notes />
//    }
  