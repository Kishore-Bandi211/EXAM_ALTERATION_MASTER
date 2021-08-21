import React from "react";
import './Nav2.css';
import { Nav, Navbar,Button} from "react-bootstrap";
function App(){

return(
      <span>
        <div className="">
          <div className="navb">

         
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Brand href="/fhome" id="brd">EXAM ALTERATION HELPER</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link href="/AllocationTime" id="allot_details">ALLOCATED TIME</Nav.Link>
    <Nav.Link href="/swap" id="swap" >SWAP REQUEST</Nav.Link>
    <Nav.Link href="/viewact" id="activity">EXAM SCHEDULE</Nav.Link>
    <Nav.Link href="/fnotify" id="fnotify">NOTIFICATIONS</Nav.Link>
    <Nav.Link href="/Passchange" id="passchange">CHANGE PASSWORD</Nav.Link>
    <Nav.Link href="/feedback" id="fb">FEEDBACK</Nav.Link>
  </Nav>
  <Nav>
 <Button variant="dark" href="/" value="Logout" id="Logout" >LOGOUT</Button>
  </Nav>
</Navbar.Collapse>
</Navbar>
 </div>
  
</div>
</span>
    )
}

export default App;