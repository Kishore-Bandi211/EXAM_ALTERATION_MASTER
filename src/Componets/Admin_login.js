
import './Admin_login.css';
import { Form,Button,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect} from 'react';
import firebase from '../firebase'
function App() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  var count=1;
  const db = firebase.firestore();
  function submit_login(e){
    e.preventDefault();
    let request =  {
        username:document.getElementById('uname').value,
        pass:document.getElementById('pwd').value,
    }
    if(email==request.username && password==request.pass){
      window.location.replace('/ahome');
    }
    
    else{
      if(count<3){
        alert('Wrong credentials!!');
        count=count+1
      }
      else if(count==3){
        alert('You have only one attempt left !!​');
        count=count+1
      }
      else{
        window.location.replace('/');
      }
      
    }
  
  }
  useEffect(() =>{
    db.collection('AdminDetails').onSnapshot(snapshot =>{
      setEmail(snapshot.docs.map(doc => doc.data().Email))
      setPassword(snapshot.docs.map(doc => doc.data().Password))
    })
  },[]);

  const signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(googleProvider).then((res) => {
      firebase.auth().onAuthStateChanged(function(user){
        if(user){
          if(user.email==email){
            window.location.replace('/ahome');
          }
          else{
            alert('Wrong credentials!!​');
          }
          //skskdh06@gmail.com
          //admin_Amrita06 
        }
        else{
        }
      });
    }).catch((error) => {
      
    })
  }


  return (
    <span>
   <div className="Admin">
       <Button variant="dark" href="/"className="ham" id="home">HOME</Button>
       <div className="Guns">
       <Card border="dark" id="crd" style={{ width: '32rem' }}>
        <Card.Body>
          <Card.Title id="adm">ADMIN LOGIN</Card.Title>
          <Form onSubmit={(e)=>submit_login(e)}>
          <Form.Group controlId="formBasicEmail">
              <Form.Label id="em">email address</Form.Label>
              <Form.Control name="uname" type="email" required="True" autoFocus="True" placeholder="email" id="uname" className="uname"/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label id="ps">password</Form.Label>
              <Form.Control name="pwd" type="password" required="True" placeholder="password" id="pwd"/>
            </Form.Group>
            <Button variant="success" className="login-provider-button button" onClick={signInWithGoogle} id="google">
                  <span> CONTINUE WITH GOOGLE</span>
               </Button>
            <Button variant="info" type="submit" value="Submit" className="bbutton" id="Submit">LOGIN</Button>
            
            </Form>
        </Card.Body>
      </Card>
      </div>
  </div>
  </span>
  );
}

export default App;
