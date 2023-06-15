import React, { useState, useContext } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Skills = () => {
  let navigate = useNavigate();

  const [answers, setAnswers] = useState({});

  const questions = [
    "Papírlapból alakzatok hajtogatása",
    "Számok összeadása fejben",
    "Logikai fejtörők megoldása",
    "Aktívan részt venni csapatjátékokban",
    "Sok ember előtt beszélni",
    "Felém hajított tárgyak - például labda - elkapása",
    "Egyenletek megoldása",
    "Problémák lényegének megértése",
    "Mások kritikáját elfogadni",
    "Szóban ismertetett feladatok megértése",
    "Számítógép billentyűzetének pontos, gyors kezelése",
    "Szöveges matematikai feladatok megoldásához egyenlet felírása",
    "Szerkezetek működési elvének megértése",
    "A közös cél érdekében a nézeteltérések félre tétele",
    "Fogalmazást írni",
    "Parányi tárgyak összeszedése az asztallapról",
    "Matematikai tételek bizonyítása",
    "Magamtól rájönni a feladatok megoldására",
    "Közösségben jó hangulat kialakítása és fenntartása",
    "Szóban felelni",
    "Egy rajz körvonalainak kivágása papírlapból",
    "Síkidomok alapterületének kiszámítása",
    "Egy probléma különböző megoldásaira rájönni",
    "Közös tevékenység a csoporttársaimmal",
    "Érvelni a saját álláspontom mellett",
    "Tárgyak kisebb darabokból való összerakása",
    "Matematikai tételek megtanulása",
    "Bonyolult feladatokat a társaimnál gyorsabban megoldani",
    "A konfliktushelyzetek elsimítása",
    "Kiselőadást tartani",
  ];

  const categories = [
    { name: "Kézügyesség", questions: [1, 6, 11, 16, 21, 26] },
    { name: "Matematikai képesség", questions: [2, 7, 12, 17, 22, 27] },
    { name: "Problémamegoldó képesség", questions: [3, 8, 13, 18, 23, 28] },
    { name: "Együttműködő képesség", questions: [4, 9, 14, 19, 24, 29] },
    { name: "Kommunikációs képesség", questions: [5, 10, 15, 20, 25, 30] },
  ];

  const handleInputChange = (question, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: value,
    }));
  };

  const evaluateResult = () => {
    let results = {};

    categories.forEach((category) => {
      let sum = 0;
      category.questions.forEach((questionNumber) => {
        sum += Number(answers[questionNumber] || 0);
      });

      let performance;
      if (sum <= 12) {
        performance = "Átlag alatti";
      } else if (sum <= 24) {
        performance = "Átlagos";
      } else {
        performance = "Átlag feletti";
      }

      results[category.name] = `${performance}: ${sum}/30`;
    });

    return results;
  };



  const { user, setUser } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
   
    const evaluatedResult = evaluateResult();
    setUser({
      ...user,
      skills: {
        ...user.skills,
        ...evaluatedResult,
      },
    });
    navigate("/home");
  };
  
  


  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <Link to="/home">
          <button className="back-button">Vissza</button>
        </Link>
        <h2 className="form-heading">Képességek, készségek teszt</h2>
        <p>
          A pályaválasztási döntés meghozatalánál érdemes figyelembe venni, hogy
          a képességek nagymértékben befolyásolják, mennyire vagyunk
          eredményesek, sikeresek a pályánkon. A kérdőív segít meghatározni,
          hogy milyen mértékben rendelkezik a munkavállalás szempontjából
          legfontosabb képességekkel.
        </p>

        <div className="column">
          {questions.map((question, index) => (
            <div key={index} className="question-container">
              <label
                htmlFor={`question${index + 1}`}
                className="question-label"
              >{`${index + 1}. ${question}:`}</label>
              <div className="slider-container">
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  id={`question${index + 1}`}
                  name={`question${index + 1}`}
                  value={answers[index + 1] || ""}
                  onChange={(e) => handleInputChange(index + 1, e.target.value)}
                  required
                  list={`rating-list-${index + 1}`}
                  className="slider-input"
                />
                <datalist
                  id={`rating-list-${index + 1}`}
                  className="rating-list"
                >
                  <option value="1">Nagyon rosszul</option>
                  <option value="2">Rosszul</option>
                  <option value="3">Átlagosan</option>
                  <option value="4">Jól</option>
                  <option value="5">Kiválóan</option>
                </datalist>
                <div className="slider-value">{answers[index + 1] || ""}</div>
              </div>
            </div>
          ))}
        </div>
        <button type="submit" className="submit-button">
          Küldés
        </button>
      </form>
    </div>
  );
};

export default Skills;
