import './App.css';
import { BrowserRouter,Routes, Route, useNavigate } from 'react-router-dom'; 
import Home from './Components/Home';
import About from './Components/Routes/About/About';
import Login from './Components/Routes/Login/Login';
import Signup from './Components/Routes/Signup/Signup';
import { useState ,useEffect} from 'react';
import NotesList from './Components/Notes/Notes';
import Add from './Components/Routes/Add_Notes/Add';
import Navbar from './Components/Navbar';


function App() {
  const [authToken, setAuthToken] = useState(null);
  const handlelogin=(authToken)=>{
    setAuthToken(authToken);
  }
    useEffect(()=>{
     const token= localStorage.getItem('authToken');
      setAuthToken(token);
    },[])  
  
  const handleLogout = () => {
    setAuthToken(null);
    localStorage.removeItem('authToken');
  };
  setTimeout(()=>{
    handleLogout();
  },[4*60*60*1000])
  const isAuthenticated = !!authToken;
  return (
    <>
        <BrowserRouter>
        <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/about" element={<About />} />
          {/* <Route exact path="/signup" element={<Signup/>} /> */}
          <Route  path="/login" element={<Login onLogin={handlelogin}/>} />
          <Route path='/add_note' element={<Add authToken={authToken} isAuthenticated={isAuthenticated}/>}/>
          <Route path='/notelist' element={<NotesList authToken={authToken} isAuthenticated={isAuthenticated}/>} />
          </Routes>
        </BrowserRouter>
   
    </>

  );
}

export default App;
