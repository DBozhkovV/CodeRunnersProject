import React,{useEffect} from 'react';
import {useState} from 'react';
import '../App.css';
import logo from '../images/coderunners.png'
import { Navbar,Nav,Container,NavbarBrand} from 'react-bootstrap';
import LoadingSpinner from "./LoadingSpinner";
import background from "../images/background.jpg";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  //  <img src="https://www.code-runners.com/wp-content/uploads/sites/6/2016/01/IMG_6952-e1502377437374.jpg" alt="Background" height = '900px' width = '100%'/>
  const nav = (

    <div className='bgi'>
            <Navbar bg="light" expand="lg">
              <Container>
                <NavbarBrand> <img src={logo} alt = "Code Runners Logo" height = "50" width = "200"/></NavbarBrand> 
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end" style={{ width: "110%" }}> 
                    <Nav.Link href="http://localhost:3000/login">Log in </Nav.Link>
                    <Nav.Link href="http://localhost:3000/register">Sign up</Nav.Link>

                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
           
          </div>
  );
  
  return (
    <div className="App" >
      {isLoading ? <LoadingSpinner /> : nav}
    </div>
    
      
    );
  }
export default Home;