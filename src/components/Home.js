import React, { useContext } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import TestDescription from './TestDescription'
import "../styles/home.css";

function Home() {
  const { user } = useContext(UserContext);

  return (
    <div className="home">
      <div className="main">
        <h1>Hello {user.profileData.name}!</h1>
        <div className="description">
          <p>
            Üdvözlünk az oldalon! Az itt található pályaorientációs tesztek
            segítséget nyújthatnak abban, hogy jobban megismerd saját
            személyiségedet és készségeidet, ami hozzájárulhat egy sikeres
            pályaválasztáshoz és karrierépítéshez.
          </p>
          <p>
            A Big Five személyiség teszt segít feltérképezni az öt fő
            személyiségvonásodat: nyitottság, lelkiség, extroverzió,
            együttműködés és érzelmi stabilitás. Ezáltal betekintést nyerhetsz
            az erősségeidbe és gyengeségeidbe, amelyeket hasznosíthatsz a
            pályaválasztásban és munkahelyi környezetben.
          </p>
          <p>
            A Készségek teszt segít felmérni a különböző készségeidet és
            képességeidet, mint például a kommunikáció, problémamegoldás,
            vezetés vagy szervezőkészség. Ez segíthet abban, hogy megtaláld
            azokat a területeket, amelyeken erősek vagy, és amelyeket érdemes
            fejlesztened a pályaválasztás és szakmai fejlődés során.
          </p>
        </div>
        <div className="tests-container">
          <div className="test">
            <h1>Big Five személyiség teszt</h1>
            <p>
              A Big Five személyiség teszt segítséget nyújt a
              személyiségvonásaid feltérképezésében, és segít megérteni, hogyan
              befolyásolhatják a pályaválasztásodat és karrieredet.
            </p>
            <Link to="/big5">
              <button>Nyitsd meg a tesztet!</button>
            </Link>
          </div>
          <div className="test">
            <h1>Készségek teszt</h1>
            <p>
              A Készségek teszt segítséget nyújt abban, hogy jobban megismerd
              saját készségeidet és képességeidet, amelyek fontosak lehetnek a
              sikeres pályaválasztásban és munkavégzésben.
            </p>
            <Link to="/skills">
              <button>Nyitsd meg a tesztet!</button>
            </Link>
          </div>
        </div>
      </div>
      <Profile />
      <TestDescription/>
    </div>
  );
}

export default Home;
