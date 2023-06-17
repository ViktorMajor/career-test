import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function LandingPage() {
  return (
    <Container className="text-center">
      <Card className="mt-5 p-4">
        <h1>Üdvözöllek!</h1>
        <p>Ez egy egyszerű bemutató oldal, ahol rögzítheted személyes adataidat.</p>
        <div className="button-container mt-4">
          <Link to="/signup">
            <Button variant="success" size="lg"> Személyes adatok rögzítése</Button>
          </Link>
        </div>
      </Card>
    </Container>
  );
}

export default LandingPage;
