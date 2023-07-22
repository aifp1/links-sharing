import React, { useState } from 'react'
import { Col, Container, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ShowLinks from '../showLinks/showLinks';
import AddLink from '../addLink/addLink';

const dashboard = (props) => {
  const { userId } = props;
  // const [user, setUser] = useState(false);
  // setUser(userId);
  return (
    <Router>
      <div>
        <Navbar expand="lg" className='bg-body-tertiary'>
          <Container>
            <Navbar.Brand as={Link} to={"/home"}>Link-Sharing</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/addLink"}>Add Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>  
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path='/home' element={<ShowLinks userId={userId}/>}/>
          <Route path='/addLink' element={<AddLink userId={userId}/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default dashboard