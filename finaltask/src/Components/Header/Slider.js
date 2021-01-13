import React from 'react';
import { Carousel } from 'react-bootstrap';
import boat from '../Img/boat.jpg';
import sail from '../Img/sail.jpg';
import sunset from '../Img/sunset.jpg';


export default function Slider() {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={boat}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Explore</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sail}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1>Discover</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sunset}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1>Learn</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
)}