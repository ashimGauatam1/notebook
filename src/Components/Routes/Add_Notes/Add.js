import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = ({authToken}) => {
  const navigate=useNavigate();
  const [data,Setdata]=useState({
    "title":"",
    "description":""
  })
  const handlesubmit=async(e)=>{
    // console.log(authToken);
    e.preventDefault();
    try{
      const response=await axios.post("http://localhost:8080/api/note/createnote",data,{
        headers: { 'auth-token': authToken },
      });
      if(response.status==200){
          navigate("/notelist");
      }
      else{
        alert("something went wrong");
      }
    }
    catch (error) {
      console.error(error);
    }
  }
  const handlechange=(e)=>{
    const {name,value}=e.target;
    Setdata({
      ...data,
      [name]:value
    });
  }
  return (
    <div>
      <form onSubmit={handlesubmit} style={{position:'absolute',top:'120px',left:'450px',boxShadow:'0 0 10px 10px rgba(1,0.5,0,0.2)',padding:'20px'}}>
<div className="mb-3">
  <label  className="form-label">Topic</label>
  <input type="text" name="title"  className="form-control" onChange={handlechange} required />
</div>
<div className="mb-3" >
  <label htmlFor="exampleInputEmail1" className="form-label">Enter your notes</label>
  <input type="text" name="description"  className="form-control" onChange={handlechange}  required/>
  <div  className="form-text">We'll never share your notes with anyone else.</div>
</div>
<button type="submit" className="btn btn-outline-warning" >Submit</button>
</form>

    </div>
  )
}

export default Add
