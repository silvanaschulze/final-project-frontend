import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const Navigationbar = () => {
  return (
    <>
      <Navbar bg='light' variant='light'>
        <Navbar.Brand href='/'>edibles</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href=''>About us</Nav.Link>
          <Nav.Link href='#features'>Database</Nav.Link>
          <Nav.Link href='#pricing'>Sign Up / Sign In</Nav.Link>
        </Nav>
        {/* <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-primary'>Search</Button>
        </Form> */}
      </Navbar>
    </>
  )
}

export default Navigationbar
