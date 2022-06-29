import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const Navigationbar = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/home">ZZCCMXTP University</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/schedule">Emploi du temps</Nav.Link>
            <Nav.Link href="/grade">Note</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigationbar