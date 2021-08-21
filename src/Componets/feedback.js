import React from 'react'
import {Form,Badge,Button} from 'react-bootstrap';
import {db} from '../firebase';
import './Forgot_password.css';
import Navi from './Nav2'
function Feedback(){
    function success(e){
        e.preventDefault();
        let request =  {
          text:document.getElementById('feedback').value,
      }

        // console.log(db.collection('Feedback').add());
        db.collection("Feedback").doc().set({
          feedback:request.text
      })
      .then(() => {
          console.log("Document successfully written!");
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      });
      
    }


    return (
      <span>
        <Navi />
        <div className="hut" >


            <Form  onSubmit={success}>
                <Form.Label className="m-30" >
                    <h1 >
    <Badge  className="m-20" variant="secondary">FEEDBACK FORM</Badge>
  </h1>
                </Form.Label>
                
  <Form.Group controlId="formBasicEmail">


    <Form.Control className="bg-dark text-light" as="textarea" rows={5} id="feedback" name="feedback" />
    
  </Form.Group>

  
  <Button variant="primary" type="submit" value="Submit" id="Submit">
    SUBMIT
  </Button>
</Form>

        </div>
        </span>
    );

}

export default Feedback;