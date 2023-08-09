import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () =>{

    return (
      <div >
      <nav className="navbar navbar-expand-lg fixed-top bg-dark-tertiary" style={{  background: 'rgb(104 171 0)' }} >
            <div className="container-fluid">
            <Link className="navbar-brand" to="/"  style={{ color: 'white' ,}}>NewsMonkey</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"  >
                <li className="nav-item" >
                <Link className="nav-link " aria-current="page" to="/Home"style={{ color: 'white' }}>Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about"style={{ color: 'white' }}>About</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/Business"style={{ color: 'white' }}>Business</Link></li>
                <li className="nav-item">
                <Link className="nav-link" to="/Entertainment"style={{ color: 'white' }}>Entertainment</Link></li>
                <li className="nav-item">
                <Link className="nav-link" to="/General"style={{ color: 'white' }}>General</Link></li>
                <li className="nav-item">
                <Link className="nav-link" to="/Health"style={{ color: 'white' }}>Health</Link></li>
                <li className="nav-item">
                <Link className="nav-link" to="/Science"style={{ color: 'white' }}>Science</Link></li>
                <li className="nav-item">
                <Link className="nav-link" to="/Sports"style={{ color: 'white' }}>Sports</Link></li>
                <li className="nav-item">
                <Link className="nav-link" to="/Technology"style={{ color: 'white' }}>Technology</Link></li>
            </ul>
            <div className="form-check form-switch mx-2">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault mx-2" style={{color: 'white'}}>Dark Mode</label>
          </div>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-light" type="submit">Search</button>
           </form>
            </div>
            </div>
        </nav>
      </div>
    )
  }

export default Navbar
