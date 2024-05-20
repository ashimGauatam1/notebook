import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
const Navbar = ({isAuthenticated ,handleLogout}) => {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Notes Here</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        {isAuthenticated ? (
          <li>
            <button to={"/"} style={{"textDecoration":"none" }} onClick={handleLogout} className="nav-link active">Logout</button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/signup" className="nav-link active">Sign Up</Link>
            </li>
            <li>
              <Link to="/login" className="nav-link active">Login</Link>
            </li>
          </>
        )}
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Welcome</a>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}


export default Navbar
