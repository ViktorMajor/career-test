import React, { useContext } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";
import Profile from "./Profile";

import "../styles/home.css";

function Home() {
  const { user } = useContext(UserContext);

  return (
    <div className="home">
      <div className="main">
       
        <div className="description">
        <h1>Üdvözlünk a pályaorientációs oldalunkon, {user.profileData.name}!</h1>
          <p>
            Az oldalunkon található pályaorientációs tesztek elsődleges célja, hogy támogatást nyújtsanak abban a folyamatban, amely során jobban megismerheted saját személyiségedet és készségeidet. Ez a felfedező utazás hozzájárulhat egy sikeres pályaválasztáshoz, karrierépítéshez és önmagad megértéséhez is. Ezek az információk fontos szerepet játszhatnak abban, hogy olyan munkát találj, ami igazán boldoggá tesz, és ahol kihasználhatod természetes tehetségeidet és erősségeidet.
          </p>
          <p>
            Az oldalunkon két fő tesztet találsz: a Big Five személyiség tesztet és a Készségek tesztet. Mindkét teszt széles körben elismert eszközök közé tartozik, amelyeket világszerte használnak az oktatásban, a karrier tanácsadásban és a pszichológiában is. Mindkét tesztet úgy tervezték, hogy mélyreható betekintést nyújtson a személyiségvonásaidba és készségeidbe, melyek alapvetően meghatározzák, hogyan értékeled és hogyan reagálsz a körülötted lévő világra.
          </p>
        </div>
  
        <div className="tests-container">
          <div className="test">
            <h2>Big Five személyiség teszt</h2>
            <p>
              A Big Five személyiség teszt az öt legfontosabb személyiségdimenziót méri, amelyek közé tartozik a nyitottság új élményekre, a lelkiismeretesség, az extroverzió, az baratságosság és az érzelmi stabilitás. Ezek a faktorok közösen alkotják a személyiségünk alapját, és jelentős hatással vannak arra, hogy hogyan viselkedünk, hogyan reagálunk különböző helyzetekre, és hogyan értékeljük magunkat és másokat. A Big Five személyiség teszt az egyik legmegbízhatóbb és legpontosabb módszer a személyiség mérésére, és az eredmények segítenek jobban megérteni, hogy milyen személyiségvonások dominálnak benned, és hogy ezek hogyan befolyásolhatják a pályaválasztásodat és a munkahelyi sikeredet.
            </p>
            <Link to="/big5">
              <button>Nyitsd meg a tesztet!</button>
            </Link>
          </div>
          <div className="test">
            <h2>Készségek teszt</h2>
            <p>
              A Készségek teszt átfogó képet ad különböző készségeidről és képességeidről, amelyek a munkaerőpiacon és a pályaválasztásban is kritikusak lehetnek. A teszt olyan területeket értékel, mint a kommunikáció, a problémamegoldás, a vezetés és még sok más. A teszt eredményei segítenek felismerni, mely készségekben vagy erős, és mely területeken lehetnek fejlesztési lehetőségeid. Ez a tudás segíthet abban, hogy olyan pályát válassz, amelyben ki tudod használni erősségeidet, és ahol a fejlődési területeiden is tudsz dolgozni.
            </p>
            <Link to="/skills">
              <button>Nyitsd meg a tesztet!</button>
            </Link>
          </div>
        </div>
      </div>

      <Profile />
    </div>
  );
  
  
}

export default Home;
