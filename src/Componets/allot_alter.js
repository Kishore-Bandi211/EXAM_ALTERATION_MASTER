import { Form,Button,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import './exam_slot_assigning.css';
import Navi from './Nav'
import { useState,useEffect } from 'react';
function App() {
  const db = firebase.firestore();
  const [data,setData]=useState([]);
  const arrayUnion = firebase.firestore.FieldValue.arrayUnion;
  useEffect(() =>{
    db.collection('Allotments').onSnapshot(snapshot =>{
      setData(snapshot.docs.map(doc => doc.data()))
    })
  })
  function add_details(e){
    e.preventDefault();
    let request =  {
        Faculty_id:document.getElementById('facid').value,
        date_s:document.getElementById('date_s').value,
        time_s:document.getElementById('time_s').value,
        Faculty_id2:document.getElementById('facid2').value,
        class_s:document.getElementById('class_s').value,
    }
    try{
      // db.collections("Allotments").where("FacultyID","==",request.Faculty_id).onSnapshot(snapshot =>{
      //   alert(snapshot);
      // })
    var count = 0
     db.collection('Allotments').onSnapshot(snapshot =>{
       snapshot.docs.map(function(doc) { 
         //alert(doc.AllotmentD)
         
         if(doc.data().AllotmentD==request.date_s & doc.data().FacultyID ==request.Faculty_id){
          count =1
       
           db.collection("Allotments").doc(doc.id).update({
            FacultyID:request.Faculty_id2,
        })
        .then(function () {
        console.log("Document successfully updated!");
        }).catch(function (error) {

            console.error("Error removing document: ", error);


      });
          //  doc.update({
          //    FacultyID:request.Faculty_id2
          //  })
           doc.FacultyID = request.Faculty_id2
           var noti= "You are allocated to classroom number: "+request.class_s+" at time: "+request.time_s+" on date: "+request.date_s
          db.collection("FacultyDetails").doc(request.Faculty_id2).update({
              notify: arrayUnion(noti),
          })
          .then(function () {
          console.log("Document successfully updated!");
          }).catch(function (error) {
              console.error("Error removing document: ", error);

        });
        db.collection("FacultyDetails").doc(request.Faculty_id).update({
          notify: arrayUnion("Your request is accepted, and your slot id swapped"),
      })
      .then(function () {
      console.log("Document successfully updated!");

      }).catch(function (error) {

          console.error("Error removing document: ", error);

    });
           alert("done")
         }
         
         
         
       })
   })

   if(count == 0){
           alert("Cannot swap")

         }

}
catch{
  console.log("Error!!")
}
}
  
  return (
    <span>
      <Navi />
   <div className='rrt'>
        <div className="amrita">
       <Card border="primary" style={{ width: '30rem' }}>
          <Card.Body id="crd">
          <Card.Title> GIVE DETAILS OF THE REQUESTED FACULTY</Card.Title>
          <Form onSubmit={(e)=>add_details(e)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>FACULTY ID</Form.Label>
            <Form.Control required="True" type="text" placeholder="faculty id" id="facid"/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>ALLOTMENT DATE</Form.Label>
            <Form.Control required="True" type="date" placeholder="date" id="date_s" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>ALLOTMENT TIME</Form.Label>
            <Form.Control required="True" type="time" placeholder="time" id="time_s" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>ALLOTMENT CLASSROOM</Form.Label>
            <Form.Control required="True" type="text" placeholder="classroom" id="class_s" />
          </Form.Group>
          <Card.Title>GIVE THE OTHER FACULTY DETAILS</Card.Title>
          <Form.Group controlId="formBasicEmail">
          <Form.Label>FACULTY ID</Form.Label>
            <Form.Control required="True" type="text" placeholder="faculty id" id="facid2"/>
          </Form.Group>
          <Button variant="primary" type="submit" value="Submit" id="Allot">SWAP</Button>
          </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
    </span>
  );
}

export default App;