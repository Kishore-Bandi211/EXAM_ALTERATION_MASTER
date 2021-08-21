import { Form,Button,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import { useState,useEffect } from 'react';
import Navi from './Nav';
import './exam_slot_assigning.css';

function App() {
    const db = firebase.firestore();
    const [Faculty_id,setFaculty_id]=useState([]);
    useEffect(() =>{
        db.collection('FacultyDetails').onSnapshot(snapshot =>{
          setFaculty_id(snapshot.docs.map(doc => doc.data().ID))
        })
      },[]);
      function validity(id){
          for(var i=0;i<Faculty_id.length;i++){
              if(id==Faculty_id[i]){
                  return 0
              }
          }
          return 1
      }
    function add_details(e){

        e.preventDefault();
        let request =  {
            Faculty_id:document.getElementById('facid').value,
            date:document.getElementById('date').value,
            time:document.getElementById('time').value,
            class:document.getElementById('class').value,
        }
        var t=0;
        if(validity(request.Faculty_id)){
        }
        else{
            alert('Wrong Credentials!!')
            t=1
          }
        if(t==1){}
        else{
            db.collection("FacultyDetails").doc().set({
                Email:request.date,
                ID:request.Faculty_id,
                Password:request.time,
                Security:request.class
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
        db.collection("FacultyDetails").doc(request.Faculty_id).set({
      })
      .then(() => {
          console.log("Document successfully written!");
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      });
      
        alert('Registered succesfully')
        }

    }
    return(
        <div className="rrt">
          <Navi />
            {/* <Button variant="primary" href="/ahome" id="Home">Home</Button> */}
            <div className=" amrita">
       <Card border="primary" style={{ width: '30rem' }}>
          <Card.Body id="crd">
          <Card.Title id="newf">NEW FACULTY REGISTRATION</Card.Title>
          <Form onSubmit={(e)=>add_details(e)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>FACULTY ID</Form.Label>
            <Form.Control required="True" autoFocus="True" type="text" placeholder="Enter faculty id" id="facid"/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>MAIL ID</Form.Label>
            <Form.Control required="True" type="email" placeholder="Enter mail id" id="date" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>PASSWORD</Form.Label>
            <Form.Control required="True" type="password" placeholder="Enter password" id="time" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>SECURITY QUESTION</Form.Label>
            <Form.Control required="True" type="password" placeholder="Enter answer for security question" id="class" />
          </Form.Group>
          <Button variant="primary" type="submit" value="Submit" id="Allot">ALLOT</Button>
          </Form>
          </Card.Body>
        </Card>
      </div>
        </div>
    )
}
export default App;