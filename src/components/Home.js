import React, { useContext } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";
import Profile from './Profile'

function Home() {
  const { user } = useContext(UserContext);

  return (
    <div className="Home">
      <h1>Hello {user.profileData.name}!</h1>
      <div className="test-container">
        <div className="b5-container">
          <h1>Big Five személyiség teszt</h1>
        <Link to='/big5'><button>Nyitsd meg a tesztet!</button></Link>
        </div>
        <div className="skills-container">
        <h1>Készségek teszt</h1>
        <Link to='/skills'><button>Nyitsd meg a tesztet!</button></Link>
        </div>
        <Profile/>
      </div>
      
      
    </div>
  )
}

export default Home;
