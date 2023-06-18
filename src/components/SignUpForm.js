import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import '../styles/signupForm.css';

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
    <Container className="signup-container">
      <h1>Személyes adatok rögzítése</h1>
      <Form onSubmit={handleSignUp} className='forms'>
        <Form.Group controlId="formBasicName">
          <Form.Control
            type="text"
            placeholder="Név"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        
        <Form.Group controlId="formBasicAge">
          <Form.Control
            type="number"
            placeholder="Kor"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </Form.Group>
  
        <Form.Group controlId="formBasicEducation">
          <Form.Control 
            as="select" 
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            required
          >
            <option value="" disabled>Mi a legmagasabb iskolai végzettséged?</option>
            <option value="Alapfok">Alapfok</option>
            <option value="Középfok">Középfok</option>
            <option value="Felsőfok">Felsőfok</option>
          </Form.Control>
        </Form.Group>
  
        <Form.Group controlId="formBasicGender">
          <Form.Control 
            as="select" 
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="" disabled>Mi a nemed?</option>
            <option value="férfi">Férfi</option>
            <option value="nő">Nő</option>
          </Form.Control>
        </Form.Group>
  
        <Button variant="primary" type="submit" className="SignUpForm">Küldés</Button>
      </Form>
    </Container>
  );
  
}

export default SignUpForm;
