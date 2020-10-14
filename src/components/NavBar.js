import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const NavBar = () => {
  return (
    <div>
      <Navbar bg='primary' variant='dark'>
        <LinkContainer to='/'>
          <Navbar.Brand>ComiX!</Navbar.Brand>
        </LinkContainer>
        <Nav className='mr-auto'>
          <LinkContainer to='/characters'>
            <Nav.Link>Characters</Nav.Link>
          </LinkContainer>
          <Nav.Link href='#features'>Issues</Nav.Link>
          <Nav.Link href='#pricing'>Origins</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-light'>Search</Button>
        </Form>
      </Navbar>
    </div>
  )
}

export default NavBar
