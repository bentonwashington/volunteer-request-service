// rafce
import React from 'react'

import './nav.scss'

import '../../App.css'
import logo from "../../assets/3.png"

const nav = () => {
  return (<div>
    <nav className="navbar  navAdjusts navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container px-4 px-lg-5">
        <img id="logo" src={logo} />
        <a className="navbar-brand" href="#!"></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active"><a class="nav-link" href="#!">Citizens Request</a></li>
            <li className="nav-item"><a class="nav-link" href="#!">Create</a></li>
            <li className="nav-item"><a class="nav-link" href="#!">My Profile</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>);
};

export default nav;