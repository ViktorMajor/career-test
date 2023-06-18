import React, { useContext } from "react";
import { UserContext } from "../App";
import Big5Chart from "./Big5Chart";
import SkillsChart from "./SkillsChart";
import "../styles/profile.css";
import HighestBig5 from "./HighestBig5";
import HighestSkills from "./HighestSkills";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="profile">
      <h2>Profil információ</h2>
      <div className="profile-info results">
        <p>
          <strong>Név:</strong> {user.profileData.name}
        </p>
        <p>
          <strong>Kor:</strong> {user.profileData.age}
        </p>
        <p>
          <strong>Nem:</strong> {user.profileData.gender}
        </p>
        <p>
          <strong>Végzettség:</strong> {user.profileData.education}
        </p>
      </div>

      <div className="results-container">
        {user.bigFive && Object.entries(user.bigFive).length > 0 && (
          <div className="chart-container">
            <h2>Big Five eredmények</h2>
            <div className="big5-results">
              
              <div className="results">
              <HighestBig5 />
                {user.bigFive &&
                  Object.entries(user.bigFive).map(
                    ([category, result], index) => (
                      <p key={index}>
                        <strong>{category}: </strong>
                        {result.category}
                      </p>
                    )
                  )}
              </div>
              <Big5Chart />
            </div>
          </div>
        )}

        {user.skills && Object.entries(user.skills).length > 0 && (
          <div className="chart-container">
            <h2>Képességek teszt eredmények</h2>
            <div className="skills-results">
              
              <div className="results">
              <HighestSkills />
                {user.skills &&
                  Object.entries(user.skills).map(([skill, result], index) => (
                    <p key={index}>
                      <strong>{skill}: </strong> {" "}
                      {result.performance}
                    </p>
                  ))}
              </div>
              <SkillsChart />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
