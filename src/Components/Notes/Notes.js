import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';

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
      <h2>Your Notes</h2>
      <ul>
        {notes.map(note => (
          <li key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
            <p>Date: {new Date(note.date).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;


//   <h1 style={{position:'relative',top:'320px',left:'490px'}}>Your Notes</h1>
//   {
//        <Notes />
//    }
  