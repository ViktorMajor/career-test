import React, { useState, useContext } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../styles/tests.css'

function Big5() {
  let navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const questions = [
    "Extrovertált, nyitott, lelkes embernek tartom magam.",
    "Kritikus, gyakran kötekedő vagyok.",
    "Megbízható és higgadt vagyok.",
    "Szorongó, könnyen feldúlódó személyiség vagyok.",
    "Nyitott vagyok az új élményekre, és rendezetten élek.",
    "Visszafogott, csendes vagyok.",
    "Együttérző és energikus ember vagyok.",
    "Kissé rendezetlen és szétszórt vagyok.",
    "Nyugodt, érzelmileg stabil vagyok.",
    "Hagyományos”, realista személyiség vagyok.",
  ];

  const categories = [
    { name: "Extraverzió", questions: [1, 6] },
    { name: "Barátságosság", questions: [2, 7] },
    { name: "Lelkiismeretesség", questions: [3, 8] },
    { name: "Érzelmi stabilitás", questions: [4, 9] },
    { name: "Nyitottság", questions: [5, 10] },
  ];

  const categoryAverages = {
    Lelkiismeretesség: 4.61,
    Barátságosság: 4.69,
    "Érzelmi stabilitás": 4.34,
    "Tapasztalatra való nyitottság": 5.51,
    Extraverzió: 3.98,
  };

  const handleInputChange = (questionNumber, value) => {
    setAnswers((prev) => ({ ...prev, [questionNumber]: value }));
  };

  const { user, setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    let results = evaluateResult();
    console.log(results);

    setUser({
      ...user,
      bigFive: {
        ...user.bigFive,
        ...results,
      },
    });
    navigate("/home");
  };

  const evaluateResult = () => {
    let results = {};

    categories.forEach((category) => {
      let sum = 0;
      category.questions.forEach((questionNumber) => {
        if (questionNumber % 2 === 0) {
          sum += 8 - Number(answers[questionNumber] || 0);
        } else {
          sum += Number(answers[questionNumber] || 0);
        }
      });
      let average = sum / category.questions.length;
      let categoryAverage = categoryAverages[category.name];
      let scoreCategory;
      if (average >= categoryAverage + 0.5) {
        scoreCategory = "Átlag feletti";
      } else if (average <= categoryAverage - 0.5) {
        scoreCategory = "Átlag alatti";
      } else {
        scoreCategory = "Átlagos";
      }

      results[category.name] = {
        score: average.toFixed(2),
        category: scoreCategory,
      };
    });

    return results;
  };

  return (
    <div className="test-container">
      <Link to="/home">
        <button className="back-button">Vissza</button>
      </Link>
      <h2 className="form-heading">Big Five személyiségjegyek</h2>
      <p>
        A pályaválasztási döntés meghozatalánál érdemes figyelembe venni, hogy a
        személyiségjegyeink nagymértékben befolyásolják, mennyire vagyunk
        eredményesek, sikeresek a pályánkon. A kérdőív segít meghatározni, hogy
        milyen mértékben rendelkezik a munkavállalás szempontjából legfontosabb
        személyiségjegyekkel.
      </p>
      <form className="form" onSubmit={handleSubmit}>
  {questions.map((question, index) => (
    <div key={index} className="question">
      <label htmlFor={`question${index + 1}`}>{`${index + 1}. ${question}`}</label>
      <div className="slider-container">
        <input
          type="range"
          min="1"
          max="7"
          id={`question${index + 1}`}
          name={`question${index + 1}`}
          value={answers[index + 1] || ""}
          onChange={(e) => handleInputChange(index + 1, e.target.value)}
          required
          list={`rating-list-${index + 1}`}
        />
        <div className="slider-value">{answers[index + 1] || "*"}</div>
      </div>
    </div>
  ))}
  <button type="submit" className="submit-button">Küldés</button>
</form>
    </div>
  );
}

export default Big5;
