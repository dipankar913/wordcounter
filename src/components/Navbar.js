import React from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg  bg-${props.mode}`}>
        <div className={"container-fluid"}>
            {/* <Link className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} to="/">{props.title}</Link> */}
            <a className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                  </button>
              <div className="collap-se navbar-collapse" id="navbarSupportedContent">
                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                 {/* <Link className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" to="/">{props.home}</Link> */}
                 <a className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" href="/">{props.home}</a>
               </li>
                  {/* <li className="nav-item">
                 <Link  className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/about">{props.aboutText}</Link>
                   </li> */}
            </ul>
            <div className="d-flex">
              <div className="bg-primary rounded mx-2">

              </div>
            </div>
                
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Enable Dark Mode</label>
            </div>
             </div>
        </div>
    </nav>

  )
}

Navbar.propTypes = {title: PropTypes.string,
                    aboutText: PropTypes.string,
                    home: PropTypes.string}
