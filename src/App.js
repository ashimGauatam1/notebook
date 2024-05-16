import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom'; 
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Routes/Login/Login';
import Signup from './Components/Routes/Signup/Signup';
import NoteState from './Context/Notestate';
import Alert from './Components/alert/Alert';


function App() {
  return (
    <>
    <NoteState>
        <BrowserRouter>
        <Alert message="hello"/>
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/about" element={<About />} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route  path="/login" element={<Login/>} />
          </Routes>
        </BrowserRouter>
        </NoteState>
    </>

  );
}

export default App;
