import React from 'react';
import { Carousel } from 'react-bootstrap';
import forest from '../Img/forest.jpg';


export default function Slider() {
    return (
    <Carousel>
        <Carousel.Item style={{'height': '600px'}}>
            <img
            className="d-block w-100"
            src={forest}
            alt="First slide"
            />
            <Carousel.Caption>
                <h3>React Blog</h3>
                <p>Task 9</p>
            </Carousel.Caption>       
        </Carousel.Item>
        <Carousel.Item style={{'height': '600px'}}>
            <img
            className="d-block w-100"
            src={forest}
            alt="First slide"
            />
            <Carousel.Caption>
                <h3>React Blog</h3>
                <p>Task 9</p>
            </Carousel.Caption>       
        </Carousel.Item>
        <Carousel.Item style={{'height': '600px'}}>
            <img
            className="d-block w-100"
            src={forest}
            alt="First slide"
            />
            <Carousel.Caption>
                <h3>React Blog</h3>
                <p>Task 9</p>
            </Carousel.Caption>       
        </Carousel.Item>
    </Carousel>
)}