import React from 'react';
import Slider from './Components/Slider';
import { Container, Row, Col, Card } from 'react-bootstrap';
import boat from '../boat.jpg';


export const Home = () => (
    <div>
   <Slider />
   <Container>
       <Row>
           <Col>
             <Card style={{width: '18rem'}}>
               <Card.Img variant="top" src={{boat}}/>

            </Card>
           </Col>
       </Row>

   </Container>

   </div>
)