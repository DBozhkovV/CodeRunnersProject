import React from "react";
import MyCalendar from '../CalendarComponents/MyCalendar';
import { Navbar, Nav, Container, NavbarBrand } from 'react-bootstrap';
import logo from '../images/coderunners.png';
import '../App.css';

function NavbarComponent() {
    const token = localStorage.getItem("token");

    const LoginElement = () => {
        if (token) {
          return <Nav.Link href="http://localhost:3000/logout">Logout</Nav.Link>;
        }
        return <Nav.Link href="http://localhost:3000/login">Log in </Nav.Link>;
      }
    
      const haveProfile = () => {
        if (token) {
          return <Nav.Link href="http://localhost:3000/profile">Profile</Nav.Link>;
        }
        return null;
      }
    
      const isAdmin = () => {
        if (token) {
          return null;
        }
        return <Nav.Link href="http://localhost:3000/admin">Admin</Nav.Link>;  
      }
    
    return (
        <div className='bgi'>
          <Navbar bg="light" expand="lg">
            <Container>
              <NavbarBrand> <img src={logo} alt="Code Runners Logo" height="50" width="200" /></NavbarBrand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end" style={{ width: "110%" }}>
                  {LoginElement()}
                  {isAdmin()}
                  {haveProfile()}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          {token ? <MyCalendar /> : null}
        </div>
      );
};

export default NavbarComponent;