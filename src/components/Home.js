import React, { useState } from "react";
import Skills from "./Skills";
import Tipi from "./Tipi";
import Profile from "./Profile";

import "../styles/Home.css";

function Home({ loggedInUser }) {
  const [showSkillsTest, setShowSkillsTest] = useState(false);
  const [showTipiTest, setShowTipiTest] = useState(false);

  const handleSkillsButtonClick = () => {
    setShowSkillsTest(true);
  };

  const handleTipiButtonClick = () => {
    setShowTipiTest(true);
  };

  return (
    <div className="home">
      <Profile />
      <div className="description">
        <h1 className="welcome-message">
          Szívből üdvözlünk a Pályaorientációs Tanácsadó platformon!
        </h1>
        <p className="introduction">
          A hozzánk fordulók számára rendkívül fontos, hogy megtalálják a
          számukra legmegfelelőbb karrierutat. Az általunk kínált AI chatbot,
          professzionális támogatást nyújt ebben az utazásban. Javasoljuk, hogy
          kezdésképp töltsd ki a neked szimpatikus tesztjeinket. A tesztek
          eredményeit a profil adatok között találod majd. Majd ha úgy érzed
          hogy elengedő tesztet kitöltöttél kérd a mesterséges intelligencia
          tanácsát arról, hogy milyen pálya is illik hozzád igazán. A
          felhasznált tesztek mindegyike a kurrens szakirodalmak által
          hitelesítve van.
        </p>
        <h3 className="why-tests">Miért érdemes kitölteni a tesztjeinket?</h3>
        <p className="why-tests-content">
          A személyre szabott karrier tanácsadás az egyén egyedi képességein,
          készségein és személyiségjegyein alapul. A pszichológiai tesztjeink
          célja, hogy feltárják ezeket az egyéni jellemzőket, amelyek
          hozzájárulhatnak a sikeres karrierhez. Továbbá, az eredmények
          segítenek abban, hogy jobban megértsd önmagad és a hozzád illő
          munkakörnyezetet.
        </p>
        <h3 className="about-ai">
          Milyen technológia húzódik meg a platform mögött?
        </h3>
        <p className="about-ai-content">
          A Pályaorientációs Tanácsadó platform mesterséges intelligencia (OpenAI ChatGPT)
          alapú technológiát alkalmaz. Az AI chatbotunk az általad kitöltött
          tesztek eredményeit és a pszichológia legújabb kutatási eredményeit
          használja, hogy személyre szabott pályaválasztási javaslatot adjon. Ez
          a hozzád leginkább illő karrierlehetőségeket segít megtalálni.
        </p>
        <div className="test-section">
          <h2 className="test-heading">Válaszd ki a teszteket!</h2>
          <div className="test-container">
            <div className="skills-test">
              <h3>Képességek és készségek</h3>
              <p>
                Ez a teszt arra szolgál, hogy feltárja azokat a készségeket és
                képességeket, amelyek a leginkább jellemzőek rád. A teszt
                eredményei alapján személyre szabott karrierajánlásokat adunk,
                segítve ezzel is döntésedet.
              </p>
              {!showSkillsTest && (
                <button
                  className="test-button"
                  onClick={handleSkillsButtonClick}
                >
                  Kezdjük a felfedezést!
                </button>
              )}
            </div>
            <div className="tipi-test">
              <h3>Big Five személyiség teszt</h3>
              <p>
                A Big Five személyiség teszt segít meghatározni a személyiség
                típusodat, ami hozzájárul a pontos karrierajánlások
                készítéséhez. A teszt eredményeinek összefüggéseit is
                bemutatjuk, hogy teljes képet kapj a személyiségjegyeidről.
              </p>
              {!showTipiTest && (
                <button className="test-button" onClick={handleTipiButtonClick}>
                  Tudj meg többet a személyiségedről!
                </button>
              )}
            </div>
          </div>
        </div>
        {showSkillsTest && (
          <Skills
            loggedInUser={loggedInUser}
            setShowSkillsTest={setShowSkillsTest}
          />
        )}
        {showTipiTest && (
          <Tipi loggedInUser={loggedInUser} setShowTipiTest={setShowTipiTest} />
        )}
      </div>
    </div>
  );

}

export default Home;
