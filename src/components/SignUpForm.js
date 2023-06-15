import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

function SignUpForm() {
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [education, setEducation] = useState("");
  const [gender, setGender] = useState("");

  let navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    setUser((prevUser) => ({
      ...prevUser,
      profileData: {
        name: name,
        age: age,
        education: education,
        gender: gender,
      },
    }));

    navigate("/home");
  };

  return (
    <div>
      <h1>Személyes adatok rögzítése</h1>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Név"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Kor"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <label>
          Legmagasabb iskolai végzettség:
          <select
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            required
          >
            <option value="">Válassz</option>
            <option value="Alapfok">Alapfok</option>
            <option value="Középfok">Középfok</option>
            <option value="Felsőfok">Felsőfok</option>
          </select>
        </label>
        <label>
          Nem:
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Válassz</option>
            <option value="férfi">Férfi</option>
            <option value="nő">Nő</option>
          </select>
        </label>
    
        <button type="submit" className="SignUpForm">Küldés</button>
       
      </form>
    </div>
  );
}

export default SignUpForm;
