import React, { useState } from "react";
import "../styles/RegistrationForm.css";

function RegistrationForm({ onRegister, navigate }) {
  const [név, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [életkor, setAge] = useState("");
  const [nem, setGender] = useState("");
  const [képzettség, setEducation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      név,
      password,
      életkor,
      nem,
      képzettség
    };

    localStorage.setItem(név, JSON.stringify(user));
    onRegister(); // Regisztráció után hívjuk meg az onRegister függvényt
    navigate("home"); // Navigálás a "home" oldalra
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Felhasználónév:
        <input
          type="text"
          value={név}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Jelszó:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        Életkor:
        <input
          type="number"
          value={életkor}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <label>
        Nem:
        <select value={nem} onChange={(e) => setGender(e.target.value)}>
          <option value="">Válasszon...</option>
          <option value="Férfi">Férfi</option>
          <option value="Nő">Nő</option>
          <option value="Egyéb">Egyéb</option>
        </select>
      </label>
      <label>
        Iskolai végzettség:
        <select value={képzettség} onChange={(e) => setEducation(e.target.value)}>
          <option value="">Válasszon...</option>
          <option value="Alapfokú végzettség">Alapfokú végzettség</option>
          <option value="Középfokú végzettség">Középfokú végzettség</option>
          <option value="Felsőfokú végzettség">Felsőfokú végzettség</option>
        </select>
      </label>

      <button type="submit">Regisztráció</button>
    </form>
  );
}

export default RegistrationForm;
