import {Button,Table} from 'react-bootstrap';
import { Form,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useState,useEffect} from 'react';
import firebase from '../firebase';
import './exam_slot_assigning.css';
import Navi from './Nav'
function App() {
  const db = firebase.firestore();
  const [D,setD]=useState([]);
  const [D2,setD2]=useState([]);
  const [D3,setD3]=useState([]);
  const [fac,setFac]=useState([]);
  useEffect(() =>{
    db.collection('Allotments').onSnapshot(snapshot =>{
      setD(snapshot.docs.map(doc => doc.data()))
    })
    db.collection('FacultyDetails').onSnapshot(snapshot =>{
      setD3(snapshot.docs.map(doc => doc.data()))
    })
    db.collection('Extra').onSnapshot(snapshot =>{
      setFac(snapshot.docs.map(doc => doc.data().Fac_id))
    })
  },[]);
  function add_details(e){
    e.preventDefault();
    let request =  {
      Faculty_id:document.getElementById('facid').value
    }
    var t=0;
    for(var i=0;i<D3.length;i++){
      if(D3[i].ID==request.Faculty_id){
        t=1;
        break;
      }
    }
    if(t==1){
    db.collection("Extra").doc("user").update({
      Fac_id : request.Faculty_id,
  }).then(function () {
    console.log("Document successfully updated!");
    update()
  }).catch(function (error) {
      console.error("Error removing document: ", error);
  });
}
else{
  alert("Wrong Faculty ID!!");
}

}
  function update(){
    for (var j=0;D2.length;j++){
      D2.pop();
    }
    for(var i=0;i<D.length;i++){
      if(D[i].FacultyID==fac[1]){
        D2.push(D[i]);
      }
    }
  }
  
  

  return (
    <span>
      <Navi />
   <div className="">
        <br></br><br></br>
        <h1 id="dtl" className="bg-secondary text-white align-content-center" >ALLOTMENT DETAILS</h1>
        <br></br>
        <Card border="primary" style={{ width: '30rem' }}>
          <Card.Body id="crd">
          <Card.Title>ALLOTMENT DETAILS BASED ON FACULTY ID</Card.Title>
          <Form onSubmit={(e)=>add_details(e)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>FACULTY ID</Form.Label>
            <Form.Control required="True" type="text" placeholder=" Enter Faculty ID" id="facid"/>
          </Form.Group>
          <Button variant="primary" type="submit" value="Submit" id="Allot">SHOW</Button>
          </Form>
          </Card.Body>
        </Card>
        {update()}
        {console.log(D2)}
        <div classname="exam" id="ExamSchedules">
  <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Serial Number</th>
      <th>Allotment Date</th>
      <th>Allotment time</th>
      <th>ClassRoom</th>
      <th>FacultyID</th>
    </tr>
  </thead>
  <tbody>
  {D2.map((row,index) => {
    const {AllotmentD,AllotmentT,ClassRoom,FacultyID} = row
    return (
      <tr>
        <td>{index+1}</td>
        <td>{AllotmentD}</td>
        <td>{AllotmentT}</td>
        <td>{ClassRoom}</td>
        <td>{FacultyID}</td>
      </tr>
    )
  })
}
  </tbody>
</Table>
<br></br>
<br></br>
</div>
    </div>
    </span>
  );
}

export default App;
