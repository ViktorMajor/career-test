import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Head from './components/Head'
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import SignUpForm from './components/SignUpForm'
import Big5 from './components/Big5'
import Skills from "./components/Skills";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css'



export const UserContext = createContext();
export function UserProvider({ children }) {
  const [user, setUser] = useState({
    profileData: {},
    bigFive: {}
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

function App() {
  return (
    <UserProvider>  
      <Router>
        <div className="App">
          <Head/>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home/*" element={<Home />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/big5" element={<Big5 />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
