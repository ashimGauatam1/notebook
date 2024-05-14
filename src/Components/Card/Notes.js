import React, { useContext } from 'react'

import noteContext from '../../Context/Notecontext';

import Noteitem from '../Noteitem';
const Notes = () => {
  const context=useContext(noteContext);
  const {notes,Setnotes}=context;  
  return (
    <div>
      { 
      notes.map((note)=>{
        return <Noteitem note={note}/>
       })}
    </div>
  )
}

export default Notes
