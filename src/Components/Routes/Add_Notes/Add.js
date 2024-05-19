import React from 'react'
import Navbar from '../../Navbar'

const Add = () => {
  return (
    <div>
        <Navbar/>
      <form style={{position:'absolute',top:'120px',left:'450px',boxShadow:'0 0 10px 10px rgba(1,0.5,0,0.2)',padding:'20px'}}>
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

    </div>
  )
}

export default Add
