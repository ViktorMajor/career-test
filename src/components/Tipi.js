import React, { useState, useContext } from "react";
import TestResultContext from './TestResultContext';
import "../styles/Skills.css";

const Tipi = ({ loggedInUser, setShowTipiTest}) => {
  const { setTestResults } = useContext(TestResultContext); 
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({});

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
    "„Hagyományos”, realista személyiség vagyok.",
  ];

  const categories = [
    { name: "Extraverzió", questions: [1, 6] },
    { name: "Barátságosság", questions: [2, 7] },
    { name: "Lelkiismeretesség", questions: [3, 8] },
    { name: "Érzelmi stabilitás", questions: [4, 9] },
    { name: "Tapasztalatra való nyitottság", questions: [5, 10] },
  ];

  const handleInputChange = (question, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: value,
    }));
  };
  const handleBackButtonClick = () => {
    setShowTipiTest(false);
  };

  const categoryAverages = {
    "Lelkiismeretesség": 4.61,
    "Barátságosság": 4.69,
    "Érzelmi stabilitás": 4.34,
    "Tapasztalatra való nyitottság": 5.51,
    "Extraverzió": 3.98
  };
  
  
  const evaluateResult = () => {
    let results = {};
  
    categories.forEach((category) => {
      let sum = 0;
      category.questions.forEach((questionNumber) => {
        if (questionNumber % 2 === 0) {
          sum += (8 - Number(answers[questionNumber] || 0));
        } else {
          sum += Number(answers[questionNumber] || 0);
        }
      });
      let average = sum / category.questions.length;
      let categoryAverage = categoryAverages[category.name];
      let scoreCategory;
      if (average >= categoryAverage + 0.5) {
        scoreCategory = 'Átlag feletti';
      } else if (average <= categoryAverage - 0.5) {
        scoreCategory = 'Átlag alatti';
      } else {
        scoreCategory = 'Átlagos';
      }
     
      results[category.name] = `Pontszám: ${average.toFixed(2)}/7, ${scoreCategory}`;
    });
  
    return results;
  };
  
  


  const handleSubmit = (event) => {
    event.preventDefault();
    const result = evaluateResult();
    setResult(result);
    setShowResult(true);

    // Az eredményeket a localStorage-ban "big5" néven menti el
    localStorage.setItem("Big Five személyiség teszt", JSON.stringify(result));

    if (localStorage.hasOwnProperty(loggedInUser)) {
      const updatedUser = JSON.parse(localStorage.getItem(loggedInUser));
      updatedUser.orientationTestResult = result;

      localStorage.setItem(loggedInUser, JSON.stringify(updatedUser));
    }

    console.log("Teszt eredmények:");
    console.log(result);

    setTestResults(result);  
  };


  if (showResult) {
    return (
      <div>
        
      </div>
    );
  }

   return (
    <div>
     
      {showResult && (
        <div className="result-container">
          <h3>Test Eredménye:</h3>
          {Object.keys(result).map((key) => (
            <p key={key}>
              {key}: {result[key]}
            </p>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit} className="form-container">
        
        <button onClick={handleBackButtonClick} className="back-button">Vissza</button>
        <h2 className="form-heading">Big Five személyiségjegyek</h2>
      <p>
        A pályaválasztási döntés meghozatalánál érdemes figyelembe venni, hogy a
        személyiségjegyeink nagymértékben befolyásolják, mennyire vagyunk eredményesek,
        sikeresek a pályánkon. A kérdőív segít meghatározni, hogy milyen
        mértékben rendelkezik a munkavállalás szempontjából legfontosabb
        személyiségjegyekkel.
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
                  max="7"
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
                  <option value="1">Egyáltalán nem jellemző</option>
                  <option value="2">Nem jellemző</option>
                  <option value="3">Inkább nem jellemző</option>
                  <option value="4">Sem nem jellemző, sem jellemző</option>
                  <option value="5">Inkább jellemző</option>
                  <option value="6">Jellemző</option>
                  <option value="7">Teljesen jellemző</option>
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

export default Tipi;
