import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Alert from '../../alert/Alert';

const Add = ({authToken,isAuthenticated}) => {
  const navigate=useNavigate();
  const [alert,SetAlert]=useState(false);
  const [message,Setmessage]=useState("");
  const [alertType, setAlertType] = useState('danger');
  const [data,Setdata]=useState({
    "title":"",
    "description":""
  })
  const handlesubmit=async(e)=>{
 
    e.preventDefault();
    try{
      const response=await axios.post("http://localhost:8080/api/note/createnote",data,{
        headers: { 'auth-token': authToken },
      });
      if(response.status==200){
        SetAlert(true);
        Setmessage("Note Added. Please check your Notes Section");
        setAlertType('success');
      }
      else{
        SetAlert(true);
        Setmessage("Something went wrong. Please try again later");
        setAlertType('danger');
      }
    }
    catch (error) {
      // SetAlert(true);
      Setmessage("Something went wrong. Please try again later");
        setAlertType('danger');
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
      {alert && <Alert type={alertType} message={message} onClose={() => SetAlert(false)} />}
      {!isAuthenticated ?
       <Alert type={alertType} message="Please Login First." onClose={() => SetAlert(false)} />
  :
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
      }
    </div>
  )
}

export default Add
