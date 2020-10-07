import React from 'react'
import './Home.css'
import { Container, Row, Col } from 'react-bootstrap';
import TitleMainDeco from './MTL/TitleMainDeco.svg';

export const Home = () => (
    <React.Fragment>
        <Container fluid={true}>
            <Row className="TitleDeco">
                <Col>
                    <div className="TitleMainDeco">
                        <img src={TitleMainDeco} alt="MainDeco" />
                    </div>
                </Col>
            </Row>
            <Row className="Carousels">
                <Col>
                </Col>
            </Row>
        </Container>
    </React.Fragment>
)
