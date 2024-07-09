import { useState } from 'react'
import { Container, Row, Col, Button, Image, Card, Carousel } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return ( <div>

    <h1>Alex Krostag's Website</h1>

    <hr></hr>

    <p>Hi. The following list will have the first three letters and vegetables that start with that letter.</p>
    
    <ol>
      <li>A is for apple</li>
      <li>B is for banana</li>
      <li>C is for carrot</li>
    </ol>

    <hr></hr>

    <p>
      The vegetables are pictured below.
    </p>

    <Image
            src="src/assets/apple.png"
            rounded
            width="30%"
            style={ {paddingTop: 60, paddingBottom: 60} }
          />

    <Image
            src="src/assets/banana.png"
            rounded
            width="30%"
            style={ {paddingTop: 60, paddingBottom: 60} }
          /> 

    <Image
            src="src/assets/carrots.png"
            rounded
            width="30%"
            style={ {paddingTop: 60, paddingBottom: 60} }
          />

    <hr></hr>

    <p>Well, what color are these vegetables/fruits? The slides below clarify that:</p>

    {/*
      make a carousel
    */}

    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>Apples are red</h3>
          <p>Text</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
        <h3>Bananas are yellow</h3>
        <p>Text</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
        <h3>Carrots are orange</h3>
        <p>Text</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  </div>
  )
}

export default App
