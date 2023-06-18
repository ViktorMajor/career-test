import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from 'react-transition-group';
import '../styles/Landing.css';

function LandingPage() {
  const nodeRef = useRef(null);
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <Transition
      nodeRef={nodeRef}
      in={inProp}
      timeout={500}
      unmountOnExit
      appear
    >
      {state => (
        <div ref={nodeRef} className={`text-center landing-container ${state}`}>
          <div className="landing-content">
            <div>
              <h1>Üdvözöllek!</h1>
              <p>
                Az oldal célja, hogy segítsen a pályaválasztásban és a munkaerőpiaci
                döntésekben. Az űrlap kitöltése után kapsz ajánlásokat és tanácsokat,
                melyek segíthetnek megtalálni a legmegfelelőbb pályát a számodra.
              </p>
              <div className="button-container">
                <Link to="/signup">
                  <button className="signup-button">
                    <span className="icon"></span>
                    Személyes adatok rögzítése
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
}

export default LandingPage;
