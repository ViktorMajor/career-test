import React, { useState, useContext } from "react";
import { UserContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import "../styles/tests.css";

const Skills = () => {
  let navigate = useNavigate();

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

  const [answers, setAnswers] = useState(
    new Array(questions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);
  const categories = [
    { name: "Kézügyesség", questions: [1, 6, 11, 16, 21, 26] },
    { name: "Matematikai képesség", questions: [2, 7, 12, 17, 22, 27] },
    { name: "Problémamegoldás", questions: [3, 8, 13, 18, 23, 28] },
    { name: "Együttműködés", questions: [4, 9, 14, 19, 24, 29] },
    { name: "Kommunikáció", questions: [5, 10, 15, 20, 25, 30] },
  ];

  const handleInputChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
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

      results[category.name] = { score: sum, performance: performance };
    });

    return results;
  };

  const { setUser } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    if (answers.some((answer) => answer === null)) {
      // not all questions have been answered
      alert("Kérjük, válaszoljon minden kérdésre.");
      return;
    }

    const results = evaluateResult();
    setUser((prevState) => ({
      ...prevState,
      skills: results,
    }));
    navigate("/home");
  };

  return (
    <div className="test-container">
      <form className="form" onSubmit={handleSubmit}>
        <Link to="/home">
          <button className="back-button">Vissza</button>
        </Link>
        <h2>Képességek és Készségek Értékelése</h2>
        <p>
          A karrierválasztás kulcsfontosságú eleme az önreflexió, amely során
          elgondolkozunk saját képességeinken és készségeinken. Ezek a
          tulajdonságok nagymértékben befolyásolhatják, hogy milyen mértékben
          tudjuk kiaknázni a bennünk rejlő potenciált, és milyen sikeresek
          leszünk a kiválasztott pályánkon. A kérdőívünk célja, hogy segítsen
          felmérni a munkához szükséges legfontosabb képességeid szintjét.<hr></hr> A
          kérdésekre adott válaszaidat az alábbi skálán értékelheted: 1 - nagyon
          gyenge, 2 - gyenge, 3 - átlagos, 4 - jó, 5 - kiváló. Próbálj meg az
          első reakcióidra hallgatni a kérdésekre adott válaszaidnál, ne tölts
          túl sok időt a gondolkodással.
          <hr></hr>
        </p>
        <h5>Milyen képességekkel rendelkezel az alábbi témákban?</h5>
        {questions.map((question, index) => (
          <div key={index} className="question">
            <label
              htmlFor={`question${index + 1}`}
              className={
                submitted && answers[index] === null ? "unanswered" : ""
              }
            >
              {`${index + 1}. ${question}`}
            </label>
            <div className="slider-container">
              <input
                type="range"
                min="1"
                max="5"
                id={`question${index + 1}`}
                name={`question${index + 1}`}
                value={answers[index] || ""}
                onChange={(e) => handleInputChange(index, e.target.value)}
                required
                list={`rating-list-${index + 1}`}
              />
              <datalist id={`rating-list-${index + 1}`}>
                <option value="1">Nagyon rosszul</option>
                <option value="2">Rosszul</option>
                <option value="3">Átlagosan</option>
                <option value="4">Jól</option>
                <option value="5">Kiválóan</option>
              </datalist>
              <div className="slider-value">{answers[index] || "*"}</div>
            </div>
          </div>
        ))}
        <button type="submit" className="submit-button">
          Küldés
        </button>
      </form>
    </div>
  );
};

export default Skills;
