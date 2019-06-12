import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
//import { connect } from 'react-redux';
import { logout } from '../actions/authActions'

//export default class Navigation extends React.Component {
class Navigation extends React.Component{
    
    // handleLogout = (e) => {
    //     e.preventDefault();
    //     //debugger
    //     this.props.logout();
    //     //this.props.history.push('/')
    //   }
    
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
                            {/* <NavDropdown.Item href="#action/3.1">my account</NavDropdown.Item> */}
                             <NavDropdown.Item href="/notebooks">my notebooks</NavDropdown.Item>
                            {/* <NavDropdown.Item href="/notes">all notes</NavDropdown.Item> */}
                            <NavDropdown.Divider />
                                <NavDropdown.Item href="/" onClick={this.handleLogout}>sign out</NavDropdown.Item>
                                <NavDropdown.Item href="#">sign out</NavDropdown.Item>
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
export default Navigation
//export default connect(null, {logout})(Navigation)