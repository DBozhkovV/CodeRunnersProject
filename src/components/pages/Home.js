import React from "react";
import '../App.css';
import logo from '../images/coderunners.png'
import { Navbar,Nav,Container,NavbarBrand} from 'react-bootstrap';

function Home() {
    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <NavbarBrand> <img src={logo} alt = "Code Runners Logo" height = "50" width = "140"/></NavbarBrand> 
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end" style={{ width: "100%" }}> 
                <Nav.Link href="http://localhost:3000/login">Log in </Nav.Link>
                <Nav.Link href="http://localhost:3000/register">Sign up</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <img src="https://www.code-runners.com/wp-content/uploads/sites/6/2016/01/IMG_6952-e1502377437374.jpg" alt="Background" height = '900px' width = '100%'/>
      </div>
    );
  }
export default Home;