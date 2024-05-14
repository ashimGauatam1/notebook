import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import Notes from './Card/Notes';
const Home = () => {
  return (
    <div>
        <Navbar/>
        <form style={{position:'absolute',top:'120px',left:'450px'}}>
  <div className="mb-3">
    <label  className="form-label">Topic</label>
    <input type="text" name="title"  className="form-control" />
  </div>
  <div className="mb-3" >
    <label htmlFor="exampleInputEmail1" className="form-label">Enter your notes</label>
    <input type="text" name="description"  className="form-control"/>
    <div  className="form-text">We'll never share your notes with anyone else.</div>
  </div>
  <button type="submit" className="btn btn-outline-warning">Submit</button>
</form>
    <h1 style={{position:'relative',top:'320px',left:'490px'}}>Your Notes</h1>
    {
         <Notes />
     }
    </div>
  )
}

export default Home
