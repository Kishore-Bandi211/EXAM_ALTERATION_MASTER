import React from "react";
import './Admin_home.css';
import { Nav, Navbar, Button } from "react-bootstrap";
import Calendar from 'react-calendar';
import Navi from './Nav.js'
function App() {



  return (
    <span>
      <Navi />
      {/* <div className="ahome">
          <div className="navb">

         
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Brand href="/ahome" id="brd">EXAM ALTERATION HELPER</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link href="/allot" id="allot">EXAM SLOT ALLOCATION</Nav.Link>
    <Nav.Link href="/alalter" id="alalter" >ALLOTMENT ALTERATION</Nav.Link>
    <Nav.Link href="/aldetails" id="allotdetails">ALLOTMENT DETAILS</Nav.Link>
    <Nav.Link href="/newreg" id="newfaculty">NEW FACULTY REGISTRATION</Nav.Link>
    <Nav.Link href="/anotify" id="noti">NOTIFICATIONS</Nav.Link>
    <Nav.Link href="/Adelete" id="adelete">ALLOTMENT DELETION</Nav.Link>
  </Nav>
  <Nav>
 <Button variant="dark" href="/" value="Logout" id="Logout" >LOGOUT</Button>
  </Nav>
</Navbar.Collapse>
</Navbar>
    </div> */}
      <div className="ahome">
        <div className="image ">
          <p ><b><i> “The life so short, the craft so long to learn.”
            ― Hippocrates</i></b>

          </p>
        </div>
        <div className="calender bg-secondary">
          <Calendar activeMonth={new Date()} />
          <br></br>
          <br></br>

        </div>  </div>

      {/* </div> */}

    </span>
  )
}

export default App;
