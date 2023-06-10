import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import "../styles/LandingPage.css";

function LandingPage({ navigate }) {
  const [formToShow, setFormToShow] = useState(null);

  const showRegistrationForm = () => {
    setFormToShow("registration");
    localStorage.clear();
  };
  const showLoginForm = () => {
    setFormToShow("login");
  };
  const handleLogin = () => {
    navigate("home");
  };

  return (
    <div className="landing-page">
      <header>
        <h1>Karrier útmutató</h1>
        <p>Az oldal, ahol a jövőd kezdődik</p>
      </header>
      {formToShow === null && (
        <>
          <section>
            <h2>Üdvözlünk a Karrier útmutató weboldalon!</h2>
            <p>
              Az oldalunk segít megtalálni a legmegfelelőbb pályát számodra.
              Miután kitöltötted a pszichológiai tesztjeinket, az AI chatbotunk
              elemzi az eredményeidet, és személyre szabott tanácsokat ad a
              pályaválasztásoddal kapcsolatban.
            </p>
          </section>
          <section>
            <h2>Miért válassz minket?</h2>
            <p>
              Innovatív módszereinkkel a legjobb pályaajánlásokat tudjuk adni,
              figyelembe véve a képességeidet, érdeklődési körödet és egyéb
              fontos tényezőket.
            </p>
          </section>
          <section>
            <h2>Kezdj bele most!</h2>
            <p>
              Regisztrálj most, hogy elkezdhess kitölteni a teszteket és
              megtudd, melyik pálya illik hozzád a legjobban!
            </p>
          </section>
          <section>
            <button onClick={showRegistrationForm}>Regisztráció</button>
            <button onClick={showLoginForm}>Bejelentkezés</button>
          </section>
        </>
      )}
      {formToShow === "registration" && (
        <section>
          <RegistrationForm onRegister={handleLogin} navigate={navigate} />
        </section>
      )}

      {formToShow === "login" && (
        <section>
          <LoginForm onLogin={handleLogin} />
        </section>
      )}
    </div>
  );
}

export default LandingPage;
