import React from "react";
import { Alert, Button, Container } from 'react-bootstrap';

const PublishedMessage = () => {
const closeHandler = () => {
   window.location.reload();
 }
    
  return (
    <Container fluid className="d-flex justify-content" bsPrefix="overlay">
      <Alert variant="info" className="p-4"> 
        <Alert.Heading>Your post was published!</Alert.Heading>   
        <Button className="closeBtn" onClick={closeHandler} variant="primary">Close</Button>     
      </Alert>
    </Container>
  );
};


export default PublishedMessage;