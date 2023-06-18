import React from "react";
import { Link } from "react-router-dom";

import '../styles/Landing.css'

function LandingPage() {
  return (
    <div className="text-center landing-container">
      <div className="landing-content">
        <h1>Üdvözöllek!</h1>
        <p>Ez egy egyszerű bemutató oldal, ahol rögzítheted személyes adataidat.</p>
        <p>Az oldalon lévő űrlap segítségével könnyedén felviheted és tárolhatod személyes adataidat.</p>
        <div className="button-container">
          <Link to="/signup">
            <button className="signup-button">
               Személyes adatok rögzítése
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
