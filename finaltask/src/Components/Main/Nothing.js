import React from "react";
import { Link } from "react-router-dom";
import { Alert } from 'react-bootstrap';


const Nothing = () => {
  return (
    <Alert variant="info">
    <Alert Here is nothing to see here go></Alert>
     <Link to="/"> Home</Link>
  </Alert>
  );
};

export default Nothing;