import React, { useContext } from 'react';
import { UserContext } from '../App';

const Profile = () => {
  const { user } = useContext(UserContext);

  
    return (
      <div className='profile-container'>
        <h2>Profile Information</h2>
        <p><strong>Név:</strong> {user.profileData.name}</p>
        <p><strong>Kor:</strong> {user.profileData.age}</p>
        <p><strong>Nem:</strong> {user.profileData.gender}</p>
        <p><strong>Végzettség:</strong> {user.profileData.education}</p>
   
        <div className='big5-results'>
          <h2>Big Five Results</h2>
          {user.bigFive && Object.entries(user.bigFive).map(([category, result], index) => (
            <p key={index}><strong>{category}:</strong>{result.score}/7, {result.category}</p>
          ))}
        </div>
  
        <div className='skills-results'>
          <h2>Képességek</h2>
          {user.skills && Object.entries(user.skills).map(([skill, performance], index) => (
            <p key={index}><strong>{skill}:</strong> {performance}</p>
          ))}
        </div>
      </div>
    );
  };


export default Profile;