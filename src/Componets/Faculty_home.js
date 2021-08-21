import React from "react";
import './Faculty_home.css';
import { Nav, Navbar, Button } from "react-bootstrap";
import Calendar from 'react-calendar';
import Navi from './Nav2.js'
function App() {



  return (
    <span>
      <Navi />
    
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
