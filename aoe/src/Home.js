import React from 'react'
import './Home.css'
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import TitleMainDeco from './MTL/TitleMainDeco.svg';
import TitleHalfCircle from './MTL/TitleHalfCircle.svg';

export const Home = () => (
    <React.Fragment>
        <Container fluid={true}>
            <Row className="Title">
                <Col>
                    <div>
                        <img className="TitleHalfCircle" src={TitleHalfCircle} alt="HalfCircle" />
                        <div className="TitleHead">
                            <h3 className="HeadSub">創業五十年岡山</h3>
                            <h2 className="HeadMain">焼肉と韓国料理のお店</h2>
                        </div>
                    </div>
                </Col>
                <Col >
                    <div className="Title">
                        <img className="TitleDeco" src={TitleMainDeco} alt="MainDeco" />
                    </div>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col>
                    <p>ooo</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>ooo</p>
                </Col>
            </Row>
        </Container>
    </React.Fragment>
)






