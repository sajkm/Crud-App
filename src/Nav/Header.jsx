import React from 'react'
import { Link } from 'react-router-dom';
import {Navbar,Container} from 'react-bootstrap';

function Header() {
  return (
    <Navbar className="bg-info">
        <Container>
          <Navbar.Brand >
          <Link to={'/'} className="fs-4" style={{textDecoration:'none',color:'white'}}>
          <i className="fa fa-mobile text-warning"></i>
            Contact Manager
          </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header