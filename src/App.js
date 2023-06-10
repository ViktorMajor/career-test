import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import Head from "./components/Head";
import "./styles/RegistrationForm.css";
import TestResultContext from './components/TestResultContext';


function App() {
  const [page, setPage] = useState('landing');
  const [testResults, setTestResults] = useState({}); // Add a new state for test results

  const handleNavigation = (page) => {
    setPage(page);
  };

  return (
    <TestResultContext.Provider value={{ testResults, setTestResults }}>
      <div className="app">
        <Head />
        {page === 'landing' && <LandingPage navigate={handleNavigation} />}
        {page === 'home' && <Home />}
        <div className="result">

        </div>
      </div>
    </TestResultContext.Provider>
  );
}

export default App;
