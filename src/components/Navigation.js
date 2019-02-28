import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default class Navigation extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/"><strong>noteböök</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="#home">home</Nav.Link> */}
                        <Nav.Link href="/signup">sign up</Nav.Link>
                        <Nav.Link href="/login">login</Nav.Link>
                        
                        
                        <NavDropdown title="more" id="basic-nav-dropdown" right>
                            <NavDropdown.Item href="#action/3.1">my account</NavDropdown.Item>
                             <NavDropdown.Item href="/notebooks">all notebooks</NavDropdown.Item>
                            {/* <NavDropdown.Item href="/notes">all notes</NavDropdown.Item> */}
                            <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">sign out</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}