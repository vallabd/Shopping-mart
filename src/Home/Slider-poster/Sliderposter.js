import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Sliderposter.css';


export const Sliderposter = () => {
  return (
    <div>
        <Container className='slider-container'>
            <Row  >
                <Col className='sliderrow ' >
                   <div className='sliderdiv'> 
                   <div className='slider'></div>
                   </div>

                </Col>
            </Row>
        </Container>
    </div>
  )
}
