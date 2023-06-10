import React, { useEffect, useState } from "react";
import "../styles/Profile.css";
//import Api from "./Api";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [storageKey, setStorageKey] = useState(Date.now());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatedData = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key));
      updatedData[key] = value;
    }
    setUserData(updatedData);
  }, [storageKey]);

  const formatData = (data) => {
    if (typeof data === "string") {
      return data;
    }
    if (typeof data === "object") {
      return Object.entries(data)
        .map(([key, value]) => `${key}: ${value}`)
        .join(", ");
    }
  };

  const handleStorageChange = () => {
    setStorageKey(Date.now());
  };

  useEffect(() => {
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    handleStorageChange();
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Profil adatok:</h2>
        <button onClick={toggleVisibility} className="profile-button">
          {isVisible ? "Rejtsd el!" : "Mutasd!"}
        </button>
      </div>
      {isVisible && (
        <div className="profile-data">
          {Object.entries(userData)
            .filter(([key]) => key !== "név" && key !== "password")
            .map(([key, value]) => (
              <p key={key} className="profile-item">
                <strong className="profile-key">{key}:</strong>{" "}
                <span className="profile-value">{formatData(value)}</span>
              </p>
            ))}
        </div>
      )}
      <div className="api">
        <button>Kérem a kiértékelést!</button>
      </div>
      
    </div>
  );
};

export default Profile;
