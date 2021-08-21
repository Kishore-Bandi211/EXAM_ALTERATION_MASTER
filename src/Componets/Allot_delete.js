import { Form,Button,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import './exam_slot_assigning.css';
import { useState,useEffect } from 'react';
import Navi from './Nav'
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
        class_s:document.getElementById('class_s').value,
    }
    try{
      // db.collections("Allotments").where("FacultyID","==",request.Faculty_id).onSnapshot(snapshot =>{
      //   alert(snapshot);
      // })

      var noti= "Due to few circumstances your allotment, allotment details: classroom number: "+request.class_s+" at time: "+request.time_s+" on date: "+request.date_s+"has been reverted"
      db.collection("FacultyDetails").doc(request.Faculty_id).update({
        notify: arrayUnion(noti),
    })
    .then(function () {
    console.log("Document successfully updated!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);

  });
    
     db.collection('Allotments').onSnapshot(snapshot =>{
       snapshot.docs.map(function(doc) { 
         //alert(doc.AllotmentD)
         if(doc.data().AllotmentD==request.date_s & doc.data().FacultyID ==request.Faculty_id){
           //alert(request.Faculty_id2)
           //alert(doc.id)
           db.collection("Allotments").doc(doc.id).delete()
        .then(function () {
        console.log("Document successfully updated!");
        }).catch(function (error) {
            console.error("Error removing document: ", error);

      });
           alert("deletion succesful!")
         }
       })
   })
}
catch{
  console.log("Error!!")
}
}
  
  return (
   <div className='rrt'>
     <Navi />
        <div className="amrita">
       <Card border="primary" style={{ width: '30rem' }}>
          <Card.Body id="crd">
          <Card.Title>GIVE DEATAILS OF THE FACULTY</Card.Title>
          <Form onSubmit={(e)=>add_details(e)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>FACULTY ID</Form.Label>
            <Form.Control required="True" autoFocus="True" type="text" placeholder="Enter faculty id" id="facid"/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>ALLOTMENT DATE</Form.Label>
            <Form.Control required="True" type="date" placeholder="Enter date" id="date_s" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>ALLOTMENT TIME</Form.Label>
            <Form.Control required="True" type="time" placeholder="Enter time" id="time_s" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>ALLOTMENT CLASSROOM</Form.Label>
            <Form.Control required="True" type="text" placeholder="Enter classroom" id="class_s" />
          </Form.Group>
          <Button  variant="danger" type="submit" value="Submit" id="Allot">DELETE</Button>
          </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
