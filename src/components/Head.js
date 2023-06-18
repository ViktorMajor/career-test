import React from "react";
import { Link } from 'react-router-dom';
import '../styles/head.css'

function Head () {
  return (
    <div className="header">
      <div className="logo-container">
        <h1> Pályaorientáció tanácsadás</h1>
      </div>
      <div className="menu-container">
        <Link className="menu-link" to="/">Kezdőlap</Link>
        <Link className="menu-link" to="/home">Profilom</Link>
        <Link className="menu-link" to="/signup">Adatok rögzítése</Link>
        <Link className="menu-link" to="/big5">Big5 Teszt</Link>
        <Link className="menu-link" to="/skills">Készségteszt</Link>
      </div>
    </div>
  )
}

export default Head
