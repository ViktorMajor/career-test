import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { UserContext } from '../App';

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user || !user.bigFive || !user.skills) {
    return <div>Loading...</div>;
  }

  const bigFiveData = {
    labels: Object.keys(user.bigFive),
    datasets: [{
      label: 'Big Five Scores',
      data: Object.values(user.bigFive).map(item => item.score),
      backgroundColor: 'blue',
    }],
  };

  const skillsData = {
    labels: Object.keys(user.skills),
    datasets: [{
      label: 'Skills Performance',
      data: Object.values(user.skills),
      backgroundColor: 'red',
    }],
  };

  return (
    <div>
      <h2>Profile Information</h2>
      <p><strong>Név:</strong> {user.profileData.name}</p>
      <p><strong>Kor:</strong> {user.profileData.age}</p>
      <p><strong>Nem:</strong> {user.profileData.gender}</p>
      <p><strong>Végzettség:</strong> {user.profileData.education}</p>

      <h2>Big Five Results</h2>
      <Bar data={bigFiveData} options={{ responsive: true }} />

      <h2>Képességek</h2>
      <Bar data={skillsData} options={{ responsive: true }} />
    </div>
  );
};

export default Profile;
