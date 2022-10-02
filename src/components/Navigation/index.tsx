import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

interface NavProps {
  continents: string[];
}

const ContinentsDropdown = ({ continents }: NavProps): JSX.Element => {
  return (
    <NavDropdown title="Continents" id="basic-nav-dropdown">
      {continents.map((continent) => (
        <NavDropdown.Item key={continent} href={`/${continent}`}>
          {continent}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
};

const Navigation = ({ continents }: NavProps): JSX.Element => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Rona Dash</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Global</Nav.Link>
            <ContinentsDropdown continents={continents} />
            <Nav.Link href="#link">Countries</Nav.Link>
            <Nav.Link href="#link">US States</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Refresh</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
