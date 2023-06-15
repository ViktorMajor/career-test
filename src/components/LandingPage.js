import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="LandingPage">
      <h1>Üdvözöllek!</h1>
      <div className="button-container">
        <Link to="/signup">
          <button className="sign-up"> Személyes adatok rögzítése</button>
        </Link>
      
      </div>
    </div>
  );
}

export default LandingPage;
