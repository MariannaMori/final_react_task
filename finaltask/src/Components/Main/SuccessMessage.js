import React from "react";
import { Alert, Button, Container } from 'react-bootstrap';

const SuccessMessage = () => {
const closeHandler = () => {
   window.location.reload();
 }
    
  return (
    <Container fluid className="d-flex justify-content" bsPrefix="overlay">
      <Alert variant="success" className="p-4"> 
        <Alert.Heading>Great job!</Alert.Heading>
        <p>Your post was published</p>
        <Button className="closeBtn" onClick={closeHandler} variant="outline-success"> Close </Button>     
      </Alert>
    </Container>
  );
};


export default SuccessMessage;