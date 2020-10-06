import React from 'react'
import { Container, Row } from 'react-bootstrap';
import TitleMainDeco from './MTL/TitleMainDeco.svg';

export const Home = () => (
    <Container fluid={true}>
        <Row className="TitleDeco">
            <div className="TitleMainDeco">
            <img src={TitleMainDeco} alt="MainDeco" />
            </div>
        </Row>
    </Container>
)