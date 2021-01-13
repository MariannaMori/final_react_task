import React from "react";
import { Link } from "react-router-dom";
import { Alert } from 'react-bootstrap';


const Nothing = () => {
  return (
    <div>
    <Alert variant="danger">
        <Alert.Heading>Nothing was found!</Alert.Heading>
    <Link to="/">Go to home page</Link>
    </Alert>
</div>
  );
};

export default Nothing;