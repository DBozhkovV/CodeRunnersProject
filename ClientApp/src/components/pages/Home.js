import React, { useEffect } from 'react';
import { useState } from 'react';
import '../App.css';
import logo from '../images/coderunners.png'
import { Navbar, Nav, Container, NavbarBrand } from 'react-bootstrap';
import LoadingSpinner from "../LoadingScreen/LoadingSpinner";
import MyCalendar from '../CalendarComponents/MyCalendar';
import Logout from './Logout';

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

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

  const nav = (
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
      <MyCalendar />
    </div>
  );

  return (
    <div className="App" >
      {isLoading ? <LoadingSpinner /> : nav}
    </div>
  );
}

export default Home;